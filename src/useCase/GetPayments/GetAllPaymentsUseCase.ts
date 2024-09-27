import { IPaymentDTO } from "./IPaymentsDTO";
import { IPaymentRepository } from "../../repositories/IPayment";

export class GetAllPaymentsUseCase{
    constructor(
        private paymentsRepository: IPaymentRepository,
    ){}

    async execute() : Promise<IPaymentDTO[]>{
        let payments = await this.paymentsRepository.findAll();
        return payments
    }
}