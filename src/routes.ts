import {request, response, Router } from "express";
import { validateToken } from "./middleware/Authentication";
import { createPaymentController } from "./useCase/CreatePayment"
import { getAllPaymentsController } from "./useCase/GetPayments";
import { getPaymentsByStatusController } from "./useCase/GetPaymentsByStatus";
import { getPaymentsByIDController } from "./useCase/GetPaymentByID";

const router = Router()

/* Rotas de Compra de Gás*/
router.post('/webhook', validateToken, (request, response) => {
    return createPaymentController.handle(request, response)
})

router.get('/payments', validateToken, (request, response) => {
    return getAllPaymentsController.handle(request, response)
})

router.get('/paymentsByStatus/:status', validateToken, (request, response) => {
    return getPaymentsByStatusController.handle(request, response)
})

router.get('/payments/:id', validateToken, (request, response) => {
    return getPaymentsByIDController.handle(request, response)
})

export { router } 