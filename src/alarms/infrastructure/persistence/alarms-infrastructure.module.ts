import { Module } from '@nestjs/common';
import { SharedModule } from '../../../shared/shared.module';
import { InMemoryAlarmPersistenceModule } from './in-memory/in-memory-persistence.module';
import { OrmAlarmPersistenceModule } from './orm/orm-persistence.module';

@Module({
  imports: [SharedModule],
  exports: [SharedModule],
})
export class AlarmsInfrastructureModule {
  static use(driver: 'orm' | 'in-memory') {
    const persistenceModule =
      driver === 'orm'
        ? OrmAlarmPersistenceModule
        : InMemoryAlarmPersistenceModule;

    return {
      module: AlarmsInfrastructureModule,
      imports: [persistenceModule],
      exports: [persistenceModule],
    };
  }
}
