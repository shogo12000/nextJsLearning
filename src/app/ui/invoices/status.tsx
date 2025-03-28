export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-1 text-sm 
        ${ status === "pending"
            ? "bg-gray-100 text-gray-500"
            : status === "paid"
            ? "bg-green-500 text-white"
            : "bg-red-500 text-white" // Cor de fallback para outros status
        }`}
        
    ></span>
  );
}
