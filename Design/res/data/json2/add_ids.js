// assign ids to all objects (1->n) each files


let fs = require('fs');
let files = fs.readdirSync('./');

for (file of files) {       //  for each file
    if(!file.includes('json')) continue;
    
    let data = require('./' + file);
    let i = 1;
    for(obj of data) {
        obj['item_id'] = i;
        i++;
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