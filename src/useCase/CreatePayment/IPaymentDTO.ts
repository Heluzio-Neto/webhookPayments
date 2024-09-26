export interface IPaymentDTO {
    id: string;
    value: number;
    billingType: string;
    status: string;
    dateCreated: Date;
    dueDate : Date;
    paymentDate?: Date;
    customerId: string;
}