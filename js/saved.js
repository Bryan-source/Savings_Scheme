
//Monthly contribution
const c = 200;

const time = 20;

//Interest Rate(i) %
const i = 1.20;

//Frequency(m) 12 meses
const m = 12;


//How much money you will save with a monthly contribution
const savedMoney = (c, time, i, m) => {
    const periods = time*m;

    //Monthly effective interest
    const lm = i/m;

    const currentValue = (c, lm, periods) => {
        //Update factor(uf)
        const uf = (1-(1+(lm/100))**-periods)/(lm/100);
        //Early rent adjustment(era)
        const era = 1 + (lm/100);
        const currentValue = c*uf*era;
        return currentValue;
    }

    const cValue = currentValue(c, lm, periods).toFixed(2);
    console.log(cValue); //42698.22

    //capitalization factor(cf)
    const cf = (1+lm/100)**periods;

    const finalValue = (cValue * cf).toFixed(2);

    return finalValue;

}

console.log(savedMoney(c, time, i ,m));

//Calculate how long it takes to save the desired capital

const fv = 60450;

const timeRequired = (c, fv,i, m ) => {
    const lm = i/m;

    const numerator = (lm/100)*(fv/(1+(lm/100))/c) + 1;
    const denominator = (1 + (lm/100));

    const log1 = Math.log(numerator);
    const log2 = Math.log(denominator);

    const periods = log1/log2;

    const time = Math.round(periods/m);

    return time;

}

console.log(timeRequired(c, fv, i, m));

