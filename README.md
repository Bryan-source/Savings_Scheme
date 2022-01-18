# Savings_Scheme
Web application where you can calculate the monthly contributions that you need to achieve your goals saving money, calculate how long it takes to save the desired capital and  how much money you will save with a monthly contribution.

## How much money you will save with a monthly contribution.
*Monthly contribution (c)
*Time(t)
*Interest Rate(i) % 
*Frequency(m)
*
*Periods(n) = t*m
*Monthly effective interest (lm) = i/m

current value = c*(1-(1+lm)^-n)/lm*(1+lm)

Monthly contribution (c): c
Update factor : 1-(1+lm)^-n)/lm
Early rent adjustment: 1+lm -> 1 + 0.10% = 1,001;

current value = (Monthly contribution) * (Update factor) * (Early rent adjustment)