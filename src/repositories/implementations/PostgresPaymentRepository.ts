import { Payment } from "../../entities/Payment";
import { IPaymentRepository } from "../IPayment";

import prismaClient from "../../prisma";

export class PostgresPaymentRepository implements IPaymentRepository{
    async save(payment : Payment){

        console.log(payment)

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
                ...payment
            }
         })

        return
     }

    async findByID(paymentID: string): Promise<Payment> {
        let payment = await prismaClient.payment.findFirst({
            where:{
                id : paymentID
            }
        })

        if(!payment){
            return
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