import { Slide }  from '../types/global';

export const getIndex = (direction : string, slides: Slide[], currentIndex: number) => {
    const lastIndex = slides.length - 1;
    let index;
    if ( direction === "left") {
        const shouldResetIndex = currentIndex === 0;
        index = shouldResetIndex ? lastIndex : currentIndex - 1;
    } else {
        const shouldResetIndex = currentIndex === lastIndex;
        index = shouldResetIndex ? 0 : currentIndex + 1;
    }
    return index;
}