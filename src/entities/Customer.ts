export class Customer {
    public id: string;
    public name: string;
    public email?: string;
    public cpfCnpj: string;
    
    constructor(props : Customer){
        Object.assign(this, props)
    }
}