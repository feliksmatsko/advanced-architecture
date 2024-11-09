import { DynamicModule, Module, Type } from '@nestjs/common';
import { AlarmFactory } from '../domain/factories/alarm.factory';
import { AlarmsController } from '../presenters/http/alarms.controller';
import { AlarmsFacade } from './alarms.facade';
import { AcknowledgeAlarmCommandHandler } from './commands/acknowledge-alarm.command-handler';
import { CreateAlarmCommandHandler } from './commands/create-alarm.command-handler';
import { AlarmAcknowledgedEventHandler } from './event-handlers/alarm-acknowledget.event-handler';
import { AlarmCreatedEventHandler } from './event-handlers/alarm-created.event-handler';
import { GetAlarmsQueryHandler } from './queries/get-alarms.query-handler';

@Module({
  controllers: [AlarmsController],
  providers: [
    AlarmsFacade,
    AlarmFactory,
    CreateAlarmCommandHandler,
    GetAlarmsQueryHandler,
    AlarmCreatedEventHandler,
    AcknowledgeAlarmCommandHandler,
    AlarmAcknowledgedEventHandler,
  ],
})
export class AlarmsModule {
  static withInfrastructure(infrastructureModule: Type | DynamicModule) {
    return {
      module: AlarmsModule,
      imports: [infrastructureModule],
    };
  }
}
