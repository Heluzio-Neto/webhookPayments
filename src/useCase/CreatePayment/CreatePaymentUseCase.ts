import { IPaymentRepository } from "../../repositories/IPayment";
import { IPaymentDTO } from "./IPaymentDTO";
import { Payment } from "../../entities/Payment";


export class CreatePaymentUseCase{
    constructor(
        private paymentRepository: IPaymentRepository,
    ){}

    async execute(payment : IPaymentDTO){
            let pay = new Payment(payment)

            await this.paymentRepository.save(pay)
    }
}