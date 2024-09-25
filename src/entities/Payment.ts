export class Payment{
    public id: string;
    public value: number;
    public billingType: string;
    public status: string;
    public dueDate: Date;
    public paymentDate?: Date;
    public transactionReceiptUrl?: string;
    public customerId: string;

    constructor(props : Payment){
        Object.assign(this, props)
    }
}