import {request, response, Router } from "express";
import { validateToken } from "./middleware/Authentication";

const router = Router()

/* Rotas de Compra de Gás*/
router.get('/payments-webhook', validateToken, (request, response) => {
    try {
        const eventData = request.body;
        console.log('Webhook received from Asaas:', eventData);

        if (eventData.event === 'PAYMENT_CREATED') {
            const paymentStatus = eventData.payment.status;
            const paymentId = eventData.payment.id;
            console.log(`Pagamento ${paymentId} atualizado para status: ${paymentStatus}`);
        }
        response.status(200).send('Webhook received');
    } catch (error) {
        console.error('Error processing webhook:', error);
        response.status(500).send('Error processing webhook');
    }
})

export { router }