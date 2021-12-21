const fs = require('fs');
const {getUserInput} = require('./src/utils');



// fs.writeFile('./dist/newFile.html', employeeTemplate(), err => {
//     if(err){
//         console.log(err);
//     }
// })

// TODO: Create a function to initialize app
const init = () => {
    getUserInput();
        
}


init()