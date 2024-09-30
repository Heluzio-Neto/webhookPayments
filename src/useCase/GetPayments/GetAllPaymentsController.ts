import { Request, Response } from "express";
import { GetAllPaymentsUseCase } from "./GetAllPaymentsUseCase";

export class GetAllPaymentsController {
    constructor(
        private getAllPaymentsUseCase: GetAllPaymentsUseCase,
    ){}

    async handle(request: Request, response: Response): Promise<Response>{
        try{
            const payments = await this.getAllPaymentsUseCase.execute()
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