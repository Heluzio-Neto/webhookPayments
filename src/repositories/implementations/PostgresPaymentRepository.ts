import { Payment } from "../../entities/Payment";
import { Customer } from "../../entities/Customer";
import { IPaymentRepository } from "../IPayment";
import { PostgresCustomerRepository  } from "./PostgresCustomerRepository";

import prismaClient from "../../prisma";

export class PostgresPaymentReposiroty implements IPaymentRepository{
    constructor (
        private postgresCustomerRepository : PostgresCustomerRepository
    ){}
    async save(customer : Customer, payment : Payment){
        let cust = await this.postgresCustomerRepository.findByID(customer.id)
        
        if (!cust){
            await this.postgresCustomerRepository.save(customer)
        }

        let pay = await this.findByID(payment.id)
        if(pay){
            await prismaClient.payment.update({
                where: {
                    id : payment.id
                }, 
                data : {
                    status : payment.status,
                    paymentDate : new Date(payment.paymentDate) 
                }
            })
            console.log("Payment updated")
            return
        }

        await prismaClient.payment.create({
            data : {
                id: payment.id,
                dateCreated: new Date(),
                value: payment.value,
                billingType: payment.billingType,
                status: payment.status, // Pode ser ajustado dinamicamente ou como default
                dueDate: new Date(payment.dueDate),
                paymentDate: new Date(payment.paymentDate),   
                transactionReceiptUrl: payment.transactionReceiptUrl,
                        customer: {
                    connect: { id: customer.id }, // Vincula ao cliente (existente ou criado)
                  },
            }
         })
     }

    async findByID(paymentID: string): Promise<Payment> {
        let payment = await prismaClient.payment.findFirst({
            where:{
                id : paymentID
            }
        })
        return payment
    }

    async findByStatus(statusPayment: string): Promise<Payment[]> {
        let payments = await prismaClient.payment.findMany({
            where : {
                status : statusPayment
            }
        })

        return payments
    }
}