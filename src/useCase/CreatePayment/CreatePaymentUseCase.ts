import { IPaymentRepository } from "../../repositories/IPayment";
import { IPaymentDTO } from "./IPaymentDTO";
import { ICustomerDTO } from "./ICustomerDTO";
import { Customer } from "../../entities/Customer";
import { Payment } from "../../entities/Payment";


export class CreatePaymentUseCase{
    constructor(
        private paymentRepository: IPaymentRepository,
    ){}

    async execute(customer : ICustomerDTO, payment : IPaymentDTO){
            let cust =  new Customer(customer)
            let pay = new Payment(payment)

            await this.paymentRepository.save(cust, pay)
    }
}