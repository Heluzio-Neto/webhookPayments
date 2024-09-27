import { CreatePaymentUseCase } from "./CreatePaymentUseCase";
import { CreatePaymentController } from "./CreatePaymentController";
import { PostgresPaymentRepository } from "../../repositories/implementations/PostgresPaymentRepository";

const postgresPaymentRepository = new PostgresPaymentRepository()

const createPaymentUseCase = new CreatePaymentUseCase(
    postgresPaymentRepository
)

const createPaymentController = new CreatePaymentController( 
    createPaymentUseCase
)

export { createPaymentUseCase, createPaymentController }