const currencyoneel = document.getElementById('currency-one');
    const amountoneel = document.getElementById('amount-one');

const currencytwoel = document.getElementById('currency-two');
    const amounttwoel = document.getElementById('amount-two');

const swapel = document.getElementById('swap'),
      rateel = document.getElementById('rate');


// Function
function calculate(){
    // console.log('hay');
    const crcyone = currencyoneel.value;
    const crcytwo = currencytwoel.value;

    const amtone = amountoneel.value;
    const amttwo = amounttwoel.value;

    const apikey = "944b9391e5f1ace6042149f9";

    const uri =  `https://v6.exchangerate-api.com/v6/${apikey}/latest/${crcyone}`;
        // console.log(uri);

    // AJAX Request
    fetch(uri)
    .then(respond=>respond.json())
    .then(reqdata=>{
        // console.log(reqdata);

        // console.log(reqdata.conversion_rates);
        // console.log(typeof reqdata.conversion_rates);
        // console.log(reqdata.conversion_rates[crcytwo]);

        const rate = reqdata.conversion_rates[crcytwo];
        // console.log(rate);

        rateel.innerHTML = `1 ${crcyone} = ${rate} ${crcytwo}`;

        amounttwoel.value = (amountoneel.value * rate).toFixed(2);
    });
}

// Event Listener
currencyoneel.addEventListener('change',calculate);
amountoneel.addEventListener('input', calculate);

currencytwoel.addEventListener('change', calculate);
amounttwoel.addEventListener('input', calculate);

swapel.addEventListener('click', ()=>{
    // console.log('already swap');

    const temp = currencyoneel.value;

    currencyoneel.value = currencytwoel.value;
    currencytwoel.value = temp;
   

    calculate();
})