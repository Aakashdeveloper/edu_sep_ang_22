let fs = require('fs');
let files = fs.readdirSync('./');

for (file of files) {       //  for each file
    if(!file.includes('json')) continue;
    
    let data = require('./' + file);
    for(obj of data) {
        let url = obj['image'].split('/');
        url = 'res/img2/' + url[url.length - 1];
        obj['image'] = url;
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