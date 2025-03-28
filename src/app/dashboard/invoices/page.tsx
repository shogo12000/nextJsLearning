import { Suspense } from 'react';
import Search from "@/app/ui/search";
import { CreateInvoice } from "@/app/ui/invoices/buttons";
import { lusitana } from "@/app/ui/fonts";

// Certifique-se de envolver a parte que usa useSearchParams com Suspense
export default async function Page() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <Suspense fallback={<div>Loading...</div>}>
          <CreateInvoice />
        </Suspense>
      </div>
      <div className="mt-5 flex w-full justify-center">
        {/* Aqui você pode envolver a Pagination ou Table se necessário */}
        {/* <Suspense fallback={<div>Loading...</div>}>
          <Pagination totalPages={totalPages} />
        </Suspense> */}
      </div>
    </div>
  );
}
