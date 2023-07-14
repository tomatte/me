import { RabbitSubscribe } from "@golevelup/nestjs-rabbitmq";
import { Injectable } from "@nestjs/common";

@Injectable()
export class RabbitService {

	@RabbitSubscribe({
		exchange: 'amq.direct',
		routingKey: 'hello-world',
		queue: 'hello-world',
	})
	public async subHandler(msg: {}) {
		console.log({read: msg});
	}
}
