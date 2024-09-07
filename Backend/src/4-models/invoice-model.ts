class InvoiceModel {
    id: string;
    createdAt: string;
    paymentDue: string;
    description: string;
    paymentTerms: string;
    clientName: string;
    clientEmail: string;
    status: string;
    senderAddress: {
        street: string;
        city: string;
        postCode: string;
        country: string;
    };
    clientAddress: {
        street: string;
        city: string;
        postCode: number;
        country: string;
    };
    items: {
        name: string;
        quantity: number;
        price: number;
        // total: number;
    }[];

    total: string;

    public constructor(invoice: InvoiceModel) {
        this.clientAddress = {
            street: invoice.clientAddress.street,
            city: invoice.clientAddress.city,
            postCode: invoice.clientAddress.postCode,
            country: invoice.clientAddress.country
        };
        this.clientEmail = invoice.clientEmail
        this.clientName = invoice.clientName
        this.createdAt = invoice.createdAt
        this.description = invoice.description
        this.id = invoice.id
        this.items = invoice.items.map((item: any) => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price,
            total: item.total
        }))
        this.paymentDue = invoice.paymentDue
        this.senderAddress = {
            street: invoice.senderAddress.street,
            city: invoice.senderAddress.city,
            postCode: invoice.senderAddress.postCode,
            country: invoice.senderAddress.country
        };
        this.status = invoice.status
        this.total = invoice.total
    }
}

export default InvoiceModel;