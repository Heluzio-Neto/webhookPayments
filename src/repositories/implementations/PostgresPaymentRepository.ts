import { Payment } from "../../entities/Payment";
import { IPaymentRepository } from "../IPayment";

import prismaClient from "../../prisma";

export class PostgresPaymentRepository implements IPaymentRepository{
    async save(payment : Payment){
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
            return
        }
        
        await prismaClient.payment.create({
            data : {
                id: payment.id,
                dateCreated: payment.dateCreated,
                value: payment.value,
                billingType: payment.billingType,
                status: payment.status, // Pode ser ajustado dinamicamente ou como default
                dueDate: new Date(payment.dueDate),
                paymentDate: new Date(payment.paymentDate),   
                customerId : payment.customerId        
            }
         })
     }

    async findByID(paymentID: string): Promise<Payment> {
        let payment = await prismaClient.payment.findFirst({
            where:{
                id : paymentID
            }
        })

        if(!payment){
            throw new Error("Pagamento não Cadastrado!!")
        }

        return payment
    }

    async findByStatus(statusPayment: string): Promise<Payment[]> {
        let payments = await prismaClient.payment.findMany({
            where : {
                status : statusPayment
            }
        })

        if( payments.length < 1 ){
            throw new Error("Nenhum Pagamento com esse Status!!")
        }

        return payments
    }

    async findAll(): Promise<Payment[]> {
        let payments = await prismaClient.payment.findMany({})

        if( payments.length < 1 ){
            throw new Error("Nenhum Pagamento Cadastrado!!")
        }

        return payments
    }
}