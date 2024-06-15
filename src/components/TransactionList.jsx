import React from "react";

const TransactionList = ({ transactions }) => {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-xl font-bold mb-4">Transactions</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index} className="border-b border-gray-200 py-2">
            <span
              className={
                transaction.type === "income"
                  ? "text-green-500"
                  : "text-red-500"
              }
            >
              {transaction.type === "income" ? "+" : "-"} ₦{transaction.amount}
            </span>{" "}
            - {transaction.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
