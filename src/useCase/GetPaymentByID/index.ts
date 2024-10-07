import { PostgresPaymentRepository } from "../../repositories/implementations/PostgresPaymentRepository"
import { GetPaymentsByIDController } from "./GetPaymentsByIDController"
import { GetPaymentsByIDUseCase } from "./GetPaymentsByIDUseCase"


const postgresPaymentsRepository =  new PostgresPaymentRepository()

const getPaymentsByIDUseCase = new GetPaymentsByIDUseCase(
    postgresPaymentsRepository
)

const getPaymentsByIDController = new GetPaymentsByIDController(
    getPaymentsByIDUseCase
)

export { getPaymentsByIDUseCase, getPaymentsByIDController }