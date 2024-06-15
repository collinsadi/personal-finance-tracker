import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import Chart from "../components/Chart";

const Home = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const savedTransactions =
      JSON.parse(localStorage.getItem("transactions")) || [];
    setTransactions(savedTransactions);
  }, []);

  const addTransaction = (transaction) => {
    setTransactions(() => {
      localStorage.setItem(
        "transactions",
        JSON.stringify([...transactions, transaction])
      );

      return [...transactions, transaction];
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Header />
      <div className="container mx-auto">
        <TransactionForm addTransaction={addTransaction} />
        <TransactionList transactions={transactions} />
        <Chart transactions={transactions} />
      </div>
    </div>
  );
};

export default Home;
