import { AmqpConnection, RabbitSubscribe } from "@golevelup/nestjs-rabbitmq";
import { Controller, Get, Param } from "@nestjs/common";
import { RabbitService } from "./rabbit.service";


@Controller('send')
export class RabbitController {
	constructor(
		private readonly amqpConnection: AmqpConnection,
		private rabbitService: RabbitService,
	) {}

	@Get(':msg')
	async sendMsg(@Param('msg') msg: string) {
		this.amqpConnection.publish('amq.direct', 'hello-world', msg);
		return 'published!!!'
	}

	@Get('test')
	test() {
		return 'test called';
	}
}
