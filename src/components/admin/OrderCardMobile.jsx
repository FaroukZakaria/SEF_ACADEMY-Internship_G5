import React from 'react';

const statusStyles = {
  pending: "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20",
  confirmed: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
  processing: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
  shipped: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
  delivered: "bg-green-500/10 text-green-400 border border-green-500/20",
  cancelled: "bg-red-500/10 text-red-400 border border-red-500/20",
  returned: "bg-orange-500/10 text-orange-400 border border-orange-500/20",
};

const paymentStyles = {
  pending: "bg-orange-500/10 text-orange-400 border border-orange-500/20",
  paid: "bg-green-500/10 text-green-400 border border-green-500/20",
  failed: "bg-red-500/10 text-red-400 border border-red-500/20",
  refunded: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
};

export default function OrderCardMobile({ order }) {
  return (
    <div className="bg-amazon-surface border border-amazon-border rounded-xl p-4 space-y-3 shadow-md md:hidden text-amazon-textDark">
      <div className="flex justify-between items-center">
        <span className="text-amazon-orange font-semibold text-sm">#{order._id.slice(-8).toUpperCase()}</span>
        <span className={`px-2.5 py-1 rounded-full text-xs font-medium capitalize ${statusStyles[order.status] || 'bg-gray-700 text-gray-300'}`}>
          {order.status}
        </span>
      </div>
      
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 rounded-full bg-amazon-lightNavy flex items-center justify-center font-bold text-xs text-amazon-textLight">
          {order.shippingAddress?.fullName ? order.shippingAddress.fullName.charAt(0).toUpperCase() : 'U'}
        </div>
        <span className="text-sm font-medium">{order.shippingAddress?.fullName || '---'}</span>
      </div>

      <div className="flex justify-between text-xs text-amazon-textLight border-t border-amazon-border pt-2">
        <span>{new Date(order.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
        <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-semibold ${paymentStyles[order.paymentStatus]}`}>{order.paymentStatus} ({order.paymentMethod})</span>
      </div>

      <div className="flex justify-between items-center border-t border-amazon-border pt-2">
        <span className="text-xs text-amazon-textLight">Total Price:</span>
        <span className="font-bold">{order.totalPrice} EGP</span>
      </div>
    </div>
  );
}