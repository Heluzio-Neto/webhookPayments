import { Payment } from "../entities/Payment";
import { Customer } from "../entities/Customer";

export interface IPaymentRepository {
    save( customer : Customer, payment : Payment): Promise<void>;
    findByID(id : string): Promise<Payment>;
    findByStatus(status : String): Promise<Payment[]>
}