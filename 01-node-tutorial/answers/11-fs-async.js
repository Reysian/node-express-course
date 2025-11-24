const { writeFile } = require('fs');

console.log("at start");
writeFile("./temporary/fileB.txt", "This is line 1\n", (err, result) => {
    console.log("at point 1");
    if (err) {
        console.log("This error happened: ", err);
    } else {
        writeFile("./temporary/fileB.txt", "This is line 2\n", { flag: 'a' }, (err2, result2) => {
            console.log("at point 2");
            if (err2) {
                console.log("This error happened: ", err2);
            } else {
                writeFile("./temporary/fileB.txt", "This is line 3\n", { flag: 'a' }, (err3, result3) => {
                    console.log("at point 3");
                    if (err3) {
                        console.log("This error happened: ", err3);
                    }
                });
            }
        });
    }
});
console.log("at end");