export type Invoice = {
    id: string;
    customer_id: string;
    amount: number;
    date: string;
    // In TypeScript, this is called a string union type.
    // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
    status: 'pending' | 'paid';
  };

  export type Revenue = {
    month: string;
    revenue: number;
  };

  export type LatestInvoice = {
    id: string;
    name: string;
    image_url: string;
    email: string;
    amount: string;
  };

  export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
    amount: number;
  };