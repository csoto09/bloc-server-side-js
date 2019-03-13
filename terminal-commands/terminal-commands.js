const fs = require('fs');
const prompt = require('prompt')

module.exports.ls = () => {
    fs.readdir('./', (err, files) => {
        const filesToString = files.reduce((acc,file) => {
            return `${acc} ${file} `;
        }, '');

        console.log(filesToString);        
    })
}

module.exports.touch = () => {
    prompt.start();
    prompt.get(['fileName'], (err, result) => {
        fs.writeFile(result.fileName,'','utf8',(err) => {
            if (err) throw err;
            console.log(`${result.fileName} created successfully.`);
        })
    })
};
  
module.exports.mkdir = () => {
    prompt.start();
    prompt.get(['directory'], (err, result) => {
        fs.mkdir(result.directory, (err) => {
            if (err) throw err;
            console.log(`${result.directory} created successfully.`);
        })
    })
};