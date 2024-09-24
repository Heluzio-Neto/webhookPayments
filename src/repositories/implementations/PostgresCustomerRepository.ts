import { Customer } from "../../entities/Customer";
import prismaClient from "../../prisma";

import { ICustomerRepository } from "../ICustomer";

export class PostgresCustomerRepository implements ICustomerRepository {
    async save(customer : Customer){
        await prismaClient.customer.create({
           data : {
                ...customer
           }
        })
    }

    async findByID(customerID: string): Promise<Customer> {
        let customer = await prismaClient.customer.findFirst({
            where: {
                id : customerID
            }
        })
        return customer
    }
}