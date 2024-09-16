import { useState } from "react";
import InputBox from "./components/InputBox";
import CurrencyInfo from "./components/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState();

  const handleClick = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const covert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const currencyInfo = CurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  return (
    <>
      <div className="container rounded-lg">
        <div className="flex flex-col p-5">
          <h3 className="font-bold text-center hover:underline">
            Currency Converter
          </h3>
          <InputBox
            label={"From"}
            data={options}
            amount={amount}
            onAmountChange={(amount) => setAmount(amount)}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectCurrency={from}
          />
          <button className="bg-yellow-200 m-3 p-1" onClick={handleClick}>
            Swap
          </button>
          <InputBox
            label={"To"}
            data={options}
            amount={convertedAmount}
            onAmountChange={(amount) => setConvertedAmount(amount)}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
          />
          <button className="bg-purple-400 p-2" onClick={covert}>
            {" "}
            Covert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
