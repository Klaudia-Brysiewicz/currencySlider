import React, { ReactElement, useState, useEffect } from "react";
import { Card, CardContent } from "@material-ui/core";

interface SliderItemProps {
  currencyBase: string;
  currencyExchange: string;
  flag: string;
}

const SliderItem: React.FC<SliderItemProps> = ({
  currencyBase,
  currencyExchange,
  flag
}): ReactElement | null => {
  const [hasError, setErrors] = useState(false);
  const [currency, setCurrencies] = useState(null);

  async function fetchCurrencyAPI() {
    const res = await fetch(
      `${process.env.REACT_APP_CURRENCY_API}/latest?base=${currencyBase}`
    );
    res
      .json()
      .then((res: any) => setCurrencies(res))
      .catch((err: any) => setErrors(err));
  }
  useEffect(() => {
    fetchCurrencyAPI();
  }, []);
  console.log("here");
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
        {Number.parseFloat(currency.rates[currencyExchange]).toFixed(2)}
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
