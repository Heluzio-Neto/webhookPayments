import { Customer } from "../entities/Customer";

export interface ICustomerRepository {
    save(customer : Customer): Promise<void>;
    findByID(id : string): Promise<Customer>;
}