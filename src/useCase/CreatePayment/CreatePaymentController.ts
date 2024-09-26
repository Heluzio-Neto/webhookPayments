import { Request, Response } from 'express';
import { CreatePaymentUseCase } from './CreatePaymentUseCase';

export class CreatePaymentController {
    constructor(
        private createPaymentUseCase :  CreatePaymentUseCase,
    ){}

    async handle(request : Request, response : Response){
        try {
            // Pega o body da requisição
            const { payment, customer } = request.body;

            console.log(request.body)
        
            // Valida se os dados de payment e customer existem
            if (!payment || !customer) {
              return response.status(400).json({ error: 'Dados de pagamento ou cliente estão ausentes'});
            }

            await this.createPaymentUseCase.execute(customer, payment)

            return response.status(201).json({ success: "Payment created or updated successfully"});
            
          } catch (error) {
            console.error('Erro ao processar webhook:', error);
            const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
            return response.status(500).json({ error: errorMessage });
          }
    }
}