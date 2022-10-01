
let fs = require('fs');
let files = fs.readdirSync('./');

console.log(files)
for (let i = 0; i < files.length; i++) {
    // get the name of ith file as string (not as obj)
    // let file = JSON.stringify(files[i]);
    let file = './' + files[i];
    // console.log(file);

    if(file.includes('json') == false) continue;
    
    let page = require(file);
    // console.log(page[0].Title);
    // console.log(page.length);

    let links = '';
    // iterate over all batches
    for (let i = 0; i < page.length; ++i) {
        // iterate over json key value pairs
        for (let key in page[i]) {
            if (key.includes('image')) {
                links += page[i][key] + '\n';
            }
        }
    }

    console.log('looping done');
    // console.log(links);

    let fs = require('fs');
    console.log('till here');
    let fileName = 'links' + i + '.txt';
    fs.writeFile(fileName, links, (err) => {
        if (err) throw err;
        console.log('Links Written');
    });

    console.log('done');
}
// after the links.txt file is generated, do wget -i links.txt
// need to write one more script that will replace all links with images path then
