// can only upload one folder in one run.
// change api key when you copy this file for another folder upload (as a 32 mb limit is there on imgbb account)
// and folder name
const imgbbUploader = require("imgbb-uploader");
let fs = require('fs');

let dirPath = './res/json0/';                   // change to yours

// get all files
let filesList = fs.readdirSync(dirPath);
let files = [];
let index = 0;

// filter (valid files only)
for (f of filesList) {
    if (!f.includes("json") || f.includes("structure"))
        continue;
    files.push(f);
}

let file = files[index];
let fileData = require(dirPath + file);

// let apiKey = "12d0ff2fb51eff3efc38f953224c45b8";
let apiKey = "10cbcb2747dd653b3cde2596830f876e";

// recursively uploads all the images in the json files in the path told by `dirPath`
doTheUploads = (fileDataIndx, image) => {
    imgbbUploader(apiKey, image)
        .then((response) => {
            // console.log(response);
            return response.url;        // send to next .then
        })
        .then((url) => {
            console.log(url);
            fileData[fileDataIndx]['image'] = url;
        })
        .then(() => {
            // do upload next object's image (same file)
            if (fileDataIndx < fileData.length - 1) {
                doTheUploads(fileDataIndx + 1, fileData[fileDataIndx + 1]['image']);
            } else {
                // write updated file
                fs.writeFile('./res/json0M/' + file, JSON.stringify(fileData), (err) => {
                    if (err) throw err;
                    console.log('==> # updated ' + './res/json0M/' + file + ' written');
                });

                // go to next file
                index++;    // increment file index
                if(index == (files.length / 2)) {
                    // just to avoid the limit from stopping me
                    // apiKey = "fdc6d5ce7e9b6659351983f731eb8a88";
                    apiKey = "10cbcb2747dd653b3cde2596830f876e";
                }

                // call for next file (recursively)
                if (index < files.length) {
                    file = files[index];        // now we require this file (next one)
                    fileData = require(dirPath + file);  // get this file's data

                    doTheUploads(0, fileData[0]['image']);
                }
            }

        })
        .catch((error) => console.error(error));
}

// call once, rest it will recursively call itself
doTheUploads(0, fileData[0]['image']);

