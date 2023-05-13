
export const  saveValue = async (value, valueofinput)=>{
    const fs = window.require('fs');
    const path = window.require('path');

    fs.writeFile(`./files/${valueofinput}`, value, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
    });

    console.log(process.cwd())
    return process.cwd().toString()
}
export const getFiles = () => {

    let tab = [];
    const fs = window.require('fs');
    if (! fs.existsSync("./files")) {
        console.log("git")
        mkdir("./files")
    }
    while(true){
        if (! fs.existsSync("./files")) {
            console.log("git")
            mkdir("./files")
        }
        else{
            return fs.readdirSync(`./files`, (err, files) => {
                if(err){
                    mkdir(files)
                }
                files.map(file => {
                    tab.push(file.toString())
                });
                console.log(tab)
                return tab
            });
        }
    }

}
export const loadFiles = (name) => {
    const fs = window.require('fs');
    return  fs.readFileSync(`./files/${name}`, 'utf8', (err, data) => {
        return data;
    });


}
export const mkdir = (name) =>{
    console.log("git")
    const path = window.require('path');
    const fs = window.require('fs');
    fs.mkdir(name, (err) => {
        if (err) {
            return console.error(err);
        }
        console.log('Directory created successfully!');
    });
}