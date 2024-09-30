import { PostgresPaymentRepository } from "../../repositories/implementations/PostgresPaymentRepository"
import { GetAllPaymentsController } from "./GetAllPaymentsController"
import { GetAllPaymentsUseCase } from "./GetAllPaymentsUseCase"


const postgresPaymentsRepository =  new PostgresPaymentRepository()

const getAllPaymentsUseCase = new GetAllPaymentsUseCase(
    postgresPaymentsRepository
)

const getAllPaymentsController = new GetAllPaymentsController(
    getAllPaymentsUseCase
)

export { getAllPaymentsUseCase, getAllPaymentsController }