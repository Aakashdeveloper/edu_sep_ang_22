// assigns hidden_stars (to use in api) to those files which have stars

let fs = require('fs');
let files = fs.readdirSync('./');

for (file of files) {       //  for each file
    if(!file.includes('json')) continue;
    
    let data = require('./' + file);
    for(obj of data) {
        if(obj['stars'] !== undefined && obj['hidden_stars'] === undefined) {
            obj['hidden_stars'] = obj['stars'];
        }
    }

    fs.unlink('./' + file, (err) => {
        if(err) throw err;
        console.log(file + ' deleted');
    });
    fs.writeFile(file, JSON.stringify(data), (err) => {
        if(err) throw err;
        console.log('updated ' + file + ' written');
    });
}