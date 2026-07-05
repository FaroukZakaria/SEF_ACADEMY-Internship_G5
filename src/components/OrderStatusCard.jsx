const statusStyles = {
  pending: "bg-yellow-100 text-yellow-800",
  processing: "bg-blue-100 text-blue-800",
  shipped: "bg-indigo-100 text-indigo-800",
  delivered: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
};

const OrderStatusCard = ({ status }) => {
  const style =
    statusStyles[status?.toLowerCase()] ||
    "bg-gray-100 text-gray-700";

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${style}`}
    >
      {status}
    </span>
  );
};

export default OrderStatusCard;