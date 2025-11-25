const { writeFile, readFile } = require("fs").promises;

const writer = async () => {
    try {
        await writeFile('./temp.txt', `Line 1\n`);
        await writeFile('./temp.txt', `Line 2\n`, { flag: 'a' });
        await writeFile('./temp.txt', `Line 3`, { flag: 'a' });
    } catch (err) {
        console.log("An error occured: ", err);
    }
};

const reader = async () => {
    try {
        result = await readFile('./temp.txt', 'utf8');
        console.log(result);
    } catch (err) {
        console.log("An error occured: ", err);
    }
};

const readWrite = async () => {
    try {
        await writer();
        await reader();
    } catch (err) {
        console.log("An error occured: ", err);
    }
    
};

readWrite();