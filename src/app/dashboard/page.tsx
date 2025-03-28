// import { Card } from "../ui/dashboard/cards";
// import { fetchRevenue } from "../lib/data";
// import { lusitana } from "@/app/ui/fonts";
import RevenueChart from "../ui/dashboard/revenue-chart";

export default async function Page() {
//   const revenue = await fetchRevenue();
  return (
    <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
      <RevenueChart />
      {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
    </div>
  );
}
