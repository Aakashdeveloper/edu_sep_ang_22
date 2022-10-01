let fs = require('fs');

// remove an undesired property
function removeUndesiredProperty(data, propertyName) {
    for (obj of data) {
        if (obj.hasOwnProperty(propertyName)) {
            delete obj[propertyName];
        }
    }
}
function removeUndesiredPropertyFromAllFiles(propertyName) {
    let files = fs.readdirSync('./');
    for(file of files) {
        if(!file.includes('json')) continue;
        let data = require('./' + file);

        removeUndesiredProperty(data, propertyName);
        writeNewFile(data, file);
    }
}


// remove the empty keys
function removeEmptyKeys(data) {
    for (obj of data) {
        for (key in obj) {
            if (!obj[key] || obj[key] == 'N/A' || obj[key] == 'NA' || obj[key] == "Add to Compare" || obj[key] == "Ad") { delete obj[key]; }
        }
    }
}
// remove all keys from all files that have empty value 
function removeEmptyKeysFromAllFiles() {
    let files = fs.readdirSync('./');
    for (file of files) {
        // if the file is not json, then don't proceed
        if (!file.includes('json')) continue;
        let data = require('./' + file);

        removeEmptyKeys(data);
        writeNewFile(data, file);
    }
}


function writeNewFile(data, fileName) {
    // delete actual file
    fs.unlink('./' + fileName, (err) => {
        if (err) throw err;
        console.log('file deleted');
    })

    // write the data in file with same name
    fs.writeFile(fileName, JSON.stringify(data), (err) => {
        if (err) throw err;
        console.log('written updated file');
    })
}


// required variables/objects

// let fileName = 'airconditioners-ac.json';
// let propertyName = '_6up2sf';
// let data = require('./' + fileName);

// removeUndesiredProperty(data, propertyName);
// writeNewFile(data, fileName);
// task to perform
// removeEmptyKeysFromAllFiles();
removeUndesiredPropertyFromAllFiles('site');
