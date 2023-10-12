const {readdirSync} = require('fs');

 function getFiles(dir, end){
    const res = readdirSync(dir);
    return res.filter((item) => {
        return item.endsWith(end);
    });
}

console.log(getFiles("./node_modules/antd/locale/", ".js"))