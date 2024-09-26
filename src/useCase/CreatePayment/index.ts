import { CreatePaymentUseCase } from "./CreatePaymentUseCase";
import { CreatePaymentController } from "./CreatePaymentController";
import { PostgresPaymentReposiroty } from "../../repositories/implementations/PostgresPaymentRepository";

const postgresPaymentRepository = new PostgresPaymentReposiroty()

const createPaymentUseCase = new CreatePaymentUseCase(
    postgresPaymentRepository
)

const createPaymentController = new CreatePaymentController( 
    createPaymentUseCase
)

export { createPaymentUseCase, createPaymentController }