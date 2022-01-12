const fs = require('fs/promises');

(async () => {


    const drinksContent = await fs.readFile('./data/drinks.txt', 'utf-8');
    const drinkList = drinksContent.split('\r\n');
  

    console.log(drinksContent);
    console.log(drinkList);
    // console.log(typeof drinksContent);

    let i = 0;
    for (const drink of drinkList) {
        // const drinkDetails = drink.split(' ');
        // const drinkName = drinkDetails[0];
        // const drinkPrice = drinkDetails[1];

        const drinkDetails = drink.split(' ');
        const [name, price, count] = drinkDetails;
        const turnover = parseFloat(price) * parseInt(count);

       // SAME gausi skaiciu, bet nezinai desimtainis ar nea
       //const turnover = +price * +count;

        console.log(`Pasirinkimas ${++i}: ${name}, kurio kaina yra ${price} EUR
        buvo parduota ${count} kiekis ir bendra apyvarta yra ${turnover.toFixed(2)} EUR`);
    }
    // const a = '555';
    // const b = parseInt(a);
    // console.log(typeof b);
})();


