import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EVENT_STORE_CONNECTION } from '../../core/core.constants';
import { EventStore } from '../application/ports/event-store';
import { EventDeserializer } from './event-store/deserializers/event.deserializer';
import { EventsBridge } from './event-store/events-bridge';
import { MongoEventStore } from './event-store/mongo-event-store';
import { EventStorePublisher } from './event-store/publishers/event-store.publisher';
import { Event, EventSchema } from './event-store/schemas/event.schema';
import { EventSerializer } from './event-store/serializers/event.serializer';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: Event.name, schema: EventSchema }],
      EVENT_STORE_CONNECTION,
    ),
  ],
  providers: [
    EventSerializer,
    EventStorePublisher,
    MongoEventStore,
    EventsBridge,
    EventDeserializer,
    {
      provide: EventStore,
      useExisting: MongoEventStore,
    },
  ],
  exports: [EventStore],
})
export class SharedInfrastructureModule {}
