import { Payment } from "../entities/Payment";

export interface IPaymentRepository {
    save( payment : Payment): Promise<void>;
    findByID(id : string): Promise<Payment>;
    findByStatus(status : String): Promise<Payment[]>
    findAll(): Promise<Payment[]>
}