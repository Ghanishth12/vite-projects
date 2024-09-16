import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  data = [],
  onCurrencyChange,
  selectCurrency = "inr",
  amountDisable = false,
  currencyDisable = false,
}) {
  const amountInputId = useId();
  return (
    <>
      <label className="font-semibold mb-1" htmlFor={amountInputId}>
        {label}
      </label>
      <div className="flex justify-between">
        <input
          className="outline-none m-2"
          id={amountInputId}
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
        <select
          className="outline-none"
          name=""
          id=""
          value={selectCurrency}
          disabled={currencyDisable}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {data.map((item, index) => {
            return (
              <option value={item} key={index}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}

export default InputBox;
