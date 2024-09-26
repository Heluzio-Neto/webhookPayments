export class Payment{
    public id: string;
    public value: number;
    public billingType: string;
    public status: string;
    public dateCreated: Date;
    public dueDate : Date;
    public paymentDate?: Date;
    public customerId: string;

    constructor(props : Payment){
        Object.assign(this, props)
    }
}