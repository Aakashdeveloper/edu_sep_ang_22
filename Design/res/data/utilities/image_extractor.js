
let page = require('./home_page_copy.json');
console.log(page[0].Title);

console.log(page.length);

let links = '';
// iterate over all batches
for(let i = 0; i < page.length; ++i) {
    // iterate over json key value pairs
    for(let key in page[i]) {
        if(key.includes('image')){
            links += page[i][key] + '\n';
        }
    }
}

console.log('looping done');
// console.log(links);

let fs = require('fs');
fs.writeFile('links.txt', links, (err) => { 
    if(err) throw err;
    console.log('Links Written');
});

console.log('done');

// after the links.txt file is generated, do wget -i links.txt
// need to write one more script that will replace all links with images path then
