import React, { ReactElement, useState, useEffect } from "react";
import { Card } from "@material-ui/core";
import SliderItem from "./sliderItem";

const SliderComponent: React.FC = ({}): ReactElement => {
  const currencies = [
    { base: "GBP", exchange: "EUR", flag: "GB" },
    { base: "CHF", exchange: "USD", flag: "CH" },
    { base: "USD", exchange: "GBP", flag: "US" }
  ];
  const [activIndex, setActivIndex] = useState(0);
  return (
    <Card>
      <SliderItem
        flag={currencies[activIndex].flag}
        currencyBase={currencies[activIndex].base}
        currencyExchange={currencies[activIndex].exchange}
      />
    </Card>
  );
};

export default SliderComponent;
