// remove commas (,) from price and % from discounts, 
// converts price and discount into pure numeric data, and stores as string

let fs = require('fs');
let files = fs.readdirSync('./');

for (file of files) {       //  for each file
    if (!file.includes('json')) continue;

    let data = require('./' + file);
    for (obj of data) {
        let price = obj['new_price'];
        let numericPrice = "";

        if (price !== undefined) {
            for (c of price) {
                if (Number(c)) numericPrice += c;
            }
            obj['new_price'] = numericPrice;
        }


        price = obj['old_price'];
        numericPrice = "";
        if (price !== undefined) {
            for (c of price) {
                if (Number(c)) numericPrice += c;
            }
            obj['old_price'] = numericPrice;
        }


        let discount = obj['discount'];
        if (discount !== undefined) {
            let numericDiscount = discount.slice(0, 2);
            if(numericDiscount[numericDiscount.length -1] == '%')
                numericDiscount = numericDiscount.slice(0,1);
            obj['discount'] = numericDiscount;
        }
    }

    fs.unlink('./' + file, (err) => {
        if (err) throw err;
        console.log(file + ' deleted');
    });
    fs.writeFile(file, JSON.stringify(data), (err) => {
        if (err) throw err;
        console.log('updated ' + file + ' written');
    });
}