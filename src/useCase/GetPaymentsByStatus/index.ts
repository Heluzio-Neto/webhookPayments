import { PostgresPaymentRepository } from "../../repositories/implementations/PostgresPaymentRepository"
import { GetPaymentsByStatusController } from "./GetPaymentsByStatusController"
import { GetPaymentsByStatusUseCase } from "./GetPaymentsByStatusUseCase"


const postgresPaymentsRepository =  new PostgresPaymentRepository()

const getPaymentsByStatusUseCase = new GetPaymentsByStatusUseCase(
    postgresPaymentsRepository
)

const getPaymentsByStatusController = new GetPaymentsByStatusController(
    getPaymentsByStatusUseCase
)

export { getPaymentsByStatusUseCase, getPaymentsByStatusController }