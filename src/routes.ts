import {request, response, Router } from "express";
import { validateToken } from "./middleware/Authentication";
import { createPaymentController } from "./useCase/CreatePayment"
const router = Router()

/* Rotas de Compra de Gás*/
router.post('/webhook', validateToken, (request, response) => {
    return createPaymentController.handle(request, response)
})

export { router }