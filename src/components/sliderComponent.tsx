import React, { ReactElement, useState } from "react";
import { Card, Grid } from "@material-ui/core";
import SliderItem from "./sliderItem";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { currencies } from '../constants/currency';
import { getIndex } from '../utils/helpers';

const SliderComponent: React.FC = (): ReactElement => {
  const [activIndex, setActivIndex] = useState(0);
  const previousSlide = () => {
    const index = getIndex("left", currencies, activIndex);
    setActivIndex(index);
  };
  const nextSlide = () => {
    const index = getIndex("right", currencies, activIndex);
    setActivIndex(index);
  };
  
  return (
    <Card>
        <Grid container direction="row" alignItems="center" justify="center">
            <div onClick={(event) => previousSlide()}>
                <ChevronLeftIcon fontSize='large'/>
            </div>
            <SliderItem
                flag={currencies[activIndex].flag}
                currencyBase={currencies[activIndex].base}
                currencyExchange={currencies[activIndex].exchange}
            />
            <div onClick={(event) => nextSlide()}>
                <ChevronRightIcon fontSize='large' />
            </div>
        </Grid>
    </Card>
  );
};

export default SliderComponent;
