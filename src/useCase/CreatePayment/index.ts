import { CreatePaymentUseCase } from "./CreatePaymentUseCase";
import { CreatePaymentController } from "./CreatePaymentController";
import { PostgresPaymentReposiroty } from "../../repositories/implementations/PostgresPaymentRepository";
import { PostgresCustomerRepository } from "../../repositories/implementations/PostgresCustomerRepository";

const postgresCustomerRepository = new PostgresCustomerRepository()
const postgresPaymentRepository = new PostgresPaymentReposiroty(postgresCustomerRepository)

const createPaymentUseCase = new CreatePaymentUseCase(
    postgresPaymentRepository
)

const createPaymentController = new CreatePaymentController( 
    createPaymentUseCase
)

export { createPaymentUseCase, createPaymentController }