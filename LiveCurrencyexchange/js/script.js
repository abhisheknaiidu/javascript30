const cf = document.querySelector('#currency-first');
const cs = document.querySelector('#currency-second');
const af = document.querySelector('.amount-first');
const as = document.querySelector('.amount-second');
const sb = document.querySelector('.swap');
const ri = document.querySelector('.rate-info');

let url;

const calc = () => {

    fetch(`https://api.ratesapi.io/api/latest?base=${cf.value}&symbols=${cs.value}`)
    .then(res => res.json())
    .then(data => {

        let currencyOne = cf.value;
        let currencyTwo = cs.value;

        const rate = data.rates[currencyTwo];
        ri.textContent = `1 ${currencyOne} = ${rate.toFixed(4)} ${currencyTwo}`;

        as.value = (af.value * rate).toFixed(2);
    });
}

const change = () => {
    let tempCurrency = cf.value;
    cf.value = cs.value;
    cs.value = tempCurrency;
    calc();
}

cf.addEventListener('change', calc);
cs.addEventListener('change', calc);
af.addEventListener('input', calc);
sb.addEventListener('click', change);

calc();

