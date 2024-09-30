import { IPaymentDTO } from "./IPaymentsDTO";
import { IPaymentRepository } from "../../repositories/IPayment";

export class GetPaymentsByStatusUseCase{
    constructor(
        private paymentsRepository: IPaymentRepository,
    ){}

    async execute(status : string) : Promise<IPaymentDTO[]>{
        let payments = await this.paymentsRepository.findByStatus(status);
        return payments
    }
}