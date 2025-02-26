import { useState, useEffect, use } from 'react';

const useExchange = () => {
  const [currencyList, setCurrencyList] = useState({});
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [currencyValueList, setCurrencyValueList] = useState({});
  const [currencyValue, setCurrencyValue] = useState({});

  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json')
      .then((response) => response.json())
      .then((data) => setCurrencyList(data))
      .catch((error) => console.error("Error fetching currency list:", error));
  }, []);

  useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`)
    .then((response)=>response.json())
    .then((data)=>setCurrencyValueList(data[fromCurrency]))
    .catch((error) => console.error("Error while setting from currenc", error));
  }, [fromCurrency])

  useEffect(() => {
    setCurrencyValue(currencyValueList[toCurrency] || null);
  }, [toCurrency, currencyValueList]);

  return { currencyList, fromCurrency, setFromCurrency, toCurrency, setToCurrency, currencyValue };
};

export default useExchange;
