import React, { ReactElement, useState, useEffect } from "react";
import { CardContent } from "@material-ui/core";
import { Currency } from '../types/global';

interface SliderItemProps {
  currencyBase: string;
  currencyExchange: string;
  flag: string;
}

const SliderItem: React.FC<SliderItemProps> = ({
  currencyBase,
  currencyExchange,
  flag,
}): ReactElement | null => {
  const [hasError, setErrors] = useState(false);
  const [currency, setCurrencies] = useState<Currency | null>(null);
  async function fetchCurrencyAPI() {
    const res = await fetch(
      `${process.env.REACT_APP_CURRENCY_API}/latest?base=${currencyBase}`
    );
    res
      .json()
      .then((res: any) => setCurrencies(res))
      .catch((err: any) => setErrors(err));
  }
  console.log(currency)
  useEffect(() => {
    fetchCurrencyAPI();
  }, [currencyBase]);
  if (!currency) return null;
  if (hasError) return <div>there is a problem with data fetch</div>;
  return (
    <div>
      <img
        style={styles.flag}
        src={`${process.env.REACT_APP_FLAG_API}/${flag}/flat/64.png`}
      />
      <CardContent>
        {currency.base} - {" "}
        {currency.rates[currencyExchange].toFixed(2)}{" "}
        {currencyExchange}
      </CardContent>
    </div>
  );
};

const styles = {
  flag: {
    width: "100%",
    height: "100%"
  }
};

export default SliderItem;
