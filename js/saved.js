//How much money you will save with a monthly contribution

const savedMoney = (c, time, i, m) => {
    //Monthly contribution
    //const c = 200;

    //const time = 20;

    //Interest Rate(i) %
    //const i = 1.20;

    //Frequency(m) 12 meses (cada mes del año)
    //const m = 12;

    
    const periods = time*m;

    //Monthly effective interest
    const lm = i/m;

    const currentValue = (c, lm, periods) => {
        //Update factor(uf)
        const uf = (1-(1+(lm/100))**-periods)/(lm/100);
        //Early rent adjustment(era)
        const era = 1 + (lm/100);
        return c*uf*era;
    }

    const cValue = currentValue(c, lm, periods).toFixed(2);
    console.log(cValue); //42698.22

    //capitalization factor(cf)
    const cf = (1+lm/100)**periods;

    const finalValue = (cValue * cf).toFixed(2);

    return finalValue;
}

//console.log(savedMoney(200, 20, 1.2, 12));

