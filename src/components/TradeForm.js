import React from "react";
import { useForm } from "react-hook-form";

const useInput = initialValue => {
  const [value, setValue] = React.useState(initialValue);
  const reset = () => setValue("");
  const bind = {
    value,
    onChange: event => {
      setValue(event.target.value);
    }
  };
  return [value, setValue, reset, bind];
};

const TradeForm = ({ onTradeSubmit }) => {
  const [symbolValue, setSymbolValue, symbolReset, symbolBind] = useInput();

  const [sideValue, setSideValue, sideReset, sideBind] = useInput();
  const [dateValue, setDateValue, dateReset, dateBind] = useInput();
  const [timeValue, setTimeValue, timeReset, timeBind] = useInput();
  const [priceValue, setPriceValue, priceReset, priceBind] = useInput();
  const [volumeValue, setVolumeValue, volumeReset, volumeBind] = useInput();

  const { register, handleSubmit: onSubmit } = useForm();

  const handleSubmit = event => {
    event.preventDefault();
    alert(symbolValue);
    // onSubmit
  };

  const handleSubmit2 = data => {
    console.log(data);
    onTradeSubmit(data);
  };

  const handleChange = ({ target }) => {
    console.log(target);
    const { value } = target;
    //setSymbol(value);
  };

  return (
    <form onSubmit={onSubmit(handleSubmit2)}>
      <div>
        <label htmlFor="tradeSymbolInput">Symbol </label>
        <input
          id="tradeSymbolInput"
          name="tradeSymbolInput"
          type="text"
          {...symbolBind}
          ref={register}
        />
      </div>
      <div>
        <label htmlFor="tradeDateInput">Side </label>
        <input
          id="tradeSideInput"
          name="tradeSideInput"
          type="text"
          {...sideBind}
          ref={register}
        />
      </div>
      <div>
        <label htmlFor="tradeDateInput">Date </label>
        <input
          id="tradeDateInput"
          name="tradeDateInput"
          type="text"
          {...dateBind}
          ref={register}
        />
      </div>
      <div>
        <label htmlFor="tradeTimeInput">Time </label>
        <input
          id="tradeTimeInput"
          name="tradeTimeInput"
          type="text"
          {...timeBind}
          ref={register}
        />
      </div>
      <div>
        <label htmlFor="tradePriceInput">Price</label>
        <input
          id="tradePriceInput"
          name="tradePriceInput"
          type="text"
          {...priceBind}
          ref={register}
        />
      </div>
      <div>
        <label htmlFor="tradeVolumeInput">Volume</label>
        <input
          id="tradeVolumeInput"
          name="tradeVolumeInput"
          type="text"
          {...volumeBind}

          ref={register}
        />
      </div>
      <div>
        <label htmlFor="tradePnlInput">PNL </label>
        <input
          id="tardePnlInput"
          name="tradePnlInput"
          ref={register}
          type="text"
        />
      </div>
      <div>
        <label htmlFor="tradeNotesInput">Notes</label>
        <input
          id="tradeNotesInput"
          name="tradeNotesInput"
          type="text"
          ref={register}
        />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default TradeForm;
