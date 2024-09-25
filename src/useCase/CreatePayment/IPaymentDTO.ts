export interface IPaymentDTO {
    id: string;
    value: number;
    billingType: string;
    status: string;
    dueDate: Date;
    paymentDate?: Date;
    transactionReceiptUrl?: string;
    customerId: string;

}