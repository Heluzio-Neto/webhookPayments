import { IPaymentDTO } from "./IPaymentsDTO";
import { IPaymentRepository } from "../../repositories/IPayment";

export class GetPaymentsByIDUseCase{
    constructor(
        private paymentsRepository: IPaymentRepository,
    ){}

    async execute(id : string) : Promise<IPaymentDTO>{
        let payments = await this.paymentsRepository.findByID(id);
        return payments
    }
}