// convert all "numeric" -> numeric

let fs = require('fs');
let files = fs.readdirSync('./');

for (file of files) {       //  for each file
    if (!file.includes('json')) continue;

    let data = require('./' + file);
    for (obj of data) {
        obj['new_price'] = Number(obj['new_price']);
        obj['old_price'] = Number(obj['old_price']);
        obj['discount'] = Number(obj['discount']);
        obj['hidden_stars'] = Number(obj['hidden_stars']);
        if(obj['stars']) {
            obj['stars'] = Number(obj['stars']);
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