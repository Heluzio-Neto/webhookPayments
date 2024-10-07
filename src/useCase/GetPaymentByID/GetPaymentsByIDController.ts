import { Request, Response } from "express";
import { GetPaymentsByIDUseCase } from "./GetPaymentsByIDUseCase";

export class GetPaymentsByIDController {
    constructor(
        private getPaymentsByIDUseCase: GetPaymentsByIDUseCase,
    ){}

    async handle(request: Request, response: Response): Promise<Response>{
        try{
            const id = request.params.id
            const payments = await this.getPaymentsByIDUseCase.execute(id)

            return response.status(200).json(payments);  
          } catch (err) {
            return response.status(400).json({
              message: err.message || 'Unexpected error.'
            })
          }
  }
}