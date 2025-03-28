import postgres from 'postgres';
import { formatCurrency } from './utils';
import { Revenue, LatestInvoiceRaw } from './definitions';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function fetchCardData() {
    try { 
  
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const invoiceCountPromise = sql`SELECT COUNT(*) FROM invoices`;
      const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;
      const invoiceStatusPromise = sql`SELECT
           SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
           SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
           FROM invoices`;
  
      const data = await Promise.all([
        invoiceCountPromise,
        customerCountPromise,
        invoiceStatusPromise,
      ]);

      console.log(data);
  
      const numberOfInvoices = Number(data[0][0].count ?? '0');
      const numberOfCustomers = Number(data[1][0].count ?? '0');
      const totalPaidInvoices = formatCurrency(data[2][0].paid ?? '0');
      const totalPendingInvoices = formatCurrency(data[2][0].pending ?? '0');
  
      return {
        numberOfCustomers,
        numberOfInvoices,
        totalPaidInvoices,
        totalPendingInvoices,
      };
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch card data.');
    }
  }


  export async function fetchRevenue() {
    try {
 
      // await new Promise((resolve) => setTimeout(resolve, 3000));
  
      const data = await sql<Revenue[]>`SELECT * FROM revenue`;
      
      console.log('Data fetch completed after 3 seconds.');
      console.log(data);
  
      return data;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch revenue data.');
    }
  }

  export async function fetchLatestInvoices() {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const data = await sql<LatestInvoiceRaw[]>`
        SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
        FROM invoices
        JOIN customers ON invoices.customer_id = customers.id
        ORDER BY invoices.date DESC
        LIMIT 5`;
  
      const latestInvoices = data.map((invoice) => ({
        ...invoice,
        amount: formatCurrency(invoice.amount),
      }));
      return latestInvoices;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch the latest invoices.');
    }
  }