import { Request, Response } from 'express';
import { CreatePaymentUseCase } from './CreatePaymentUseCase';

export class CreatePaymentController {
    constructor(
        private createPaymentUseCase :  CreatePaymentUseCase,
    ){}

    async handle(request : Request, response : Response){
        try {
            // Pega o body da requisição
            const { payment } = request.body;
        
            // Valida se os dados de payment e customer existem
            if (!payment) {
              return response.status(400).json({ error: 'Dados de pagamento estão ausentes'});
            }

            let pay = {
              "id": payment['id'], 
              "value": payment['value'],
              "billingType": payment['billingType'],
              "status": payment['status'],
              "dateCreated": new Date(payment['dateCreated']),
              "dueDate" : new Date(payment['dueDate']),
              "paymentDate": new Date(payment['paymentDate']),
              "customerId": payment['customer']
            }

            await this.createPaymentUseCase.execute(pay)

            return response.status(201).json({ success: "Payment created or updated successfully"});
            
          } catch (error) {
            console.error('Erro ao processar webhook:', error);
            const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
            return response.status(500).json({ error: errorMessage });
          }
    }
}