import React, { ReactElement, useState } from "react";
import { Card, Grid } from "@material-ui/core";
import SliderItem from "./sliderItem";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { currencies } from '../constants/currency';

const SliderComponent: React.FC = ({}): ReactElement => {
  const [activIndex, setActivIndex] = useState(0);
  return (
    <Card>
        <Grid container direction="row" alignItems="center" justify="center">
            <div onClick={(event) => console.log("left")}>
                <ChevronLeftIcon fontSize='large'/>
            </div>
            <SliderItem
                flag={currencies[activIndex].flag}
                currencyBase={currencies[activIndex].base}
                currencyExchange={currencies[activIndex].exchange}
            />
            <div onClick={(event) => console.log("droite")}>
                <ChevronRightIcon fontSize='large' />
            </div>
        </Grid>
    </Card>
  );
};

export default SliderComponent;
