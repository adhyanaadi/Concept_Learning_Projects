import React, { useState, useEffect } from "react";
import useExchange from "../hooks/useExchange";

const Exchanger = () => {
  const {
    currencyList,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    currencyValue,
  } = useExchange();

  const [amount, setAmount] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);

  useEffect(() => {
    if (!isNaN(amount) && !isNaN(currencyValue)) {
      setFinalAmount(amount * currencyValue);
    } else {
      setFinalAmount(0); // Default to 0 if values are invalid
    }
  }, [amount, currencyValue]);

  function handleConvert(event) {
    event.preventDefault(); // Prevent form submission reload
    console.log(
      `Converting from ${fromCurrency} to ${toCurrency}: 1 ${fromCurrency} = ${currencyValue} ${toCurrency}`
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Title */}
      <div className="text-4xl font-semibold bg-blue-800 text-white px-6 py-3 rounded-md shadow-md mb-6">
        Currency Converter
      </div>

      {/* Converter Form */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <form className="space-y-4">
          {/* Amount Input */}
          <div>
            <label htmlFor="amount" className="block text-lg font-medium">
              Enter Amount
            </label>
            <input
              type="number"
              placeholder="0"
              name="amount"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full p-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Currency Selection */}
          <div className="flex justify-between items-center space-x-4">
            {/* From Currency */}
            <div className="flex-1">
              <label htmlFor="fromCurrency" className="block text-lg font-medium">
                From
              </label>
              <select
                name="fromCurrency"
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="w-full p-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              >
                {Object.entries(currencyList).map(([code, name]) => (
                  <option key={code} value={code}>
                    {code.toUpperCase()} - {name}
                  </option>
                ))}
              </select>
            </div>

            {/* Swap Button */}
            <button
              type="button"
              className="bg-gray-300 hover:bg-gray-400 px-3 py-2 rounded-md mt-6"
              onClick={() => {
                // Swap logic
                setFromCurrency(toCurrency);
                setToCurrency(fromCurrency);
              }}
            >
              🔄
            </button>

            {/* To Currency */}
            <div className="flex-1">
              <label htmlFor="toCurrency" className="block text-lg font-medium">
                To
              </label>
              <select
                name="toCurrency"
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="w-full p-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              >
                {Object.entries(currencyList).map(([code, name]) => (
                  <option key={code} value={code}>
                    {code.toUpperCase()} - {name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Exchange Rate Display */}
          <div className="text-lg font-semibold text-center text-gray-700 bg-gray-200 p-3 rounded-md">
            {currencyValue !== null
              ? `1 ${fromCurrency.toUpperCase()} = ${currencyValue} ${toCurrency.toUpperCase()}`
              : "Fetching exchange rate..."}
          </div>

          {/* Convert Button */}
          <button
            onClick={handleConvert}
            className="w-full bg-blue-600 text-white text-lg font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Convert
          </button>

          {/* Final Amount Display */}
          <div className="text-xl font-semibold text-center text-gray-900 bg-blue-100 p-3 rounded-md">
            {currencyValue !== null
              ? `${amount} ${fromCurrency.toUpperCase()} = ${Number(finalAmount)} ${toCurrency.toUpperCase()}`
              : "Fetching exchange rate..."}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Exchanger;
