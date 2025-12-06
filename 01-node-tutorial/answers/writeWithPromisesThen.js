const { writeFile } = require("fs").promises;

console.log("writing line 1");
writeFile('./temp.txt', 'Line 1\n')
.then(() => {
    console.log("writing line 2");
    return writeFile('./temp.txt', 'Line 2\n', { flag: 'a' });
})
.then(() => {
    console.log("writing line 3");
    return writeFile('./temp.txt', 'Line 3', { flag: 'a' });
})
.catch((err) => {
    console.log('An error has occurred: ', err);
});