// assigns hidden_stars (to use in api) to those items which don't have this key

let fs = require('fs');
let files = fs.readdirSync('./');

function generateStars() {
    let stars = Math.random();
    stars = (Number(stars) + 3.5).toFixed(1);
    return String(stars);
}

for (file of files) {       //  for each file
    if(!file.includes('json')) continue;
    
    let data = require('./' + file);
    for(obj of data) {
        if(obj['stars'] === undefined && obj['hidden_stars'] === undefined) {
            obj['hidden_stars'] = generateStars();
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