import { BillingType, PaymentStatus } from './enums'; 

export class Payment{
    public id: string;
    public value: number;
    public billingType: BillingType; // Usa enum para limitar os tipos de cobrança
    public status: PaymentStatus;    // Usa enum para limitar os status de pagamento
    public dueDate: Date;
    public paymentDate?: Date;
    public transactionReceiptUrl?: string;
    public customerId: string;

    constructor(props : Payment){
        Object.assign(this, props)
    }
}