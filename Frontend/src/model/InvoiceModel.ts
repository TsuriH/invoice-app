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
        postCode: number;
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
    
    total: number;
}

export default InvoiceModel;