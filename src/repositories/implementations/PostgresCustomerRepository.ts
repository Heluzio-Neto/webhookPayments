import { Customer } from "../../entities/Customer";
import { ICustomerRepository } from "../ICustomer";

import prismaClient from "../../prisma";

export class PostgresCustomerRepository implements ICustomerRepository {
    async save(customer : Customer){
        await prismaClient.customer.create({
           data : {
                ...customer
           }
        })
    }

    async findByID(customerID: string): Promise<Customer> {
        let customer = await prismaClient.customer.findUnique({
            where: {
                id : customerID
            }
        })
        return customer
    }
}