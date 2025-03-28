// import { Card } from "../ui/dashboard/cards";
// import { fetchRevenue } from "../lib/data";
// import { lusitana } from "@/app/ui/fonts";
import CardWrapper from "@/app/ui/dashboard/cards";
import RevenueChart from "../ui/dashboard/revenue-chart";
import LatestInvoices from "../ui/dashboard/latest-invoices";

export default async function Page() {
  //   const revenue = await fetchRevenue();
  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardWrapper />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart />

        <LatestInvoices />
      </div>
    </>
  );
}
