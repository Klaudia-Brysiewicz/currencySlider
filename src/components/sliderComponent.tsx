import React, { ReactElement, useState, useEffect } from "react";
import { Card, CardContent, CardMedia } from "@material-ui/core";

const SliderComponent: React.FC = ({}): ReactElement | null=> {
  const [hasError, setErrors] = useState(false);
  const [currency, setCurrencies] = useState(null);

  async function fetchCurrencyAPI() {
    const res = await fetch(`${process.env.REACT_APP_CURRENCY_API}/latest?base=USD`);
    res
      .json()
      .then((res: any) => setCurrencies(res))
      .catch((err: any) => setErrors(err));
  }
  useEffect(() => {
    fetchCurrencyAPI();
  }, []);
  console.log(currency);
  if (!currency) return null;
  if (hasError) return <div>there is a problem with data fetch</div>;
  return (
    <Card>
        <CardMedia
            src={`${process.env.REACT_APP_FLAG_API}/US/flat/64.png`}
        />
      <CardContent>
        {currency.base} {currency.rates.GBP}
      </CardContent>
    </Card>
  );
};

export default SliderComponent;
