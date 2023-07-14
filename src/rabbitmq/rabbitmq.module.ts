import { Module } from '@nestjs/common'
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq'
import { RabbitService } from './rabbit.service'
import { RabbitController } from './rabbit.controller'


@Module({
	imports: [
		RabbitMQModule.forRoot(RabbitMQModule, {
			exchanges: [
				{
					name: 'amq.direct',
					type: 'direct',
					createExchangeIfNotExists: true,
				}
			],
			uri: "amqp://rabbitmq:5672",
			connectionInitOptions: {wait: false},
			channels: {
				'hello-world': {
					default: true,
					prefetchCount: 15,
				},
			}
			}),
		RabbitModule,
	],
	providers: [RabbitService],
	controllers: [RabbitController],
})
export class RabbitModule {}
