import { Request, Response } from "express";
import { GetPaymentsByStatusUseCase } from "./GetPaymentsByStatusUseCase";

export class GetPaymentsByStatusController {
    constructor(
        private getPaymentsByStatusUseCase: GetPaymentsByStatusUseCase,
    ){}

    async handle(request: Request, response: Response): Promise<Response>{
        try{
            const { status } = request.params
            const payments = await this.getPaymentsByStatusUseCase.execute(status)
            if( payments.length < 1 ){
                throw new Error("Nenhuma Pagamento Cadastrado!!")
            }
            return response.status(200).json(payments);  
          } catch (err) {
            return response.status(400).json({
              message: err.message || 'Unexpected error.'
            })
          }
  }
}