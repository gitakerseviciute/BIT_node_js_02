const fs = require('fs/promises');
const path = require('path');

console.log(__dirname);
console.log(__filename);

(async () => {

    function parseJSONtoObject(text) {
        try{
        const obj = JSON.parse(text);
        return [false, obj]; 
        } catch (error) {
            return [true, {}];
        } finally {
            console.log('Baigiau bandyti parsinti faila')
        }
        
    }

    function childrenNames(childrenList) {
        
        const namesOnly = [];

        for (let i = 0; i < childrenList.length; i++){
            const name = childrenList[i].name;
            namesOnly.push(name);
        }

        return namesOnly.join(', ');
    }

    const fullPath = path.join(__dirname, './data/country.json')
    const countryContent = await fs.readFile(fullPath, 'utf-8');
    // console.log(fullPath);

    const [personError, personObj] = parseJSONtoObject(countryContent);

    if(personError) {
        console.log('Parsinant faila ivyko klaida');

    } else {
        // console.log(personObj);
        console.log(`${personObj.name} ${personObj.lastname} has ${personObj.children.length} children and they names are: ${childrenNames(personObj.children)}.`)
    }

})();

//[Parent-name] [Parent-surname] has [count] children and they names are: [Child-name], [Child-name], [Child-name].

//PVZ, kaip deti masyvo dalis per simboli ar kitaip (gryni string elementai).

// const abc = ['aaa', 'bbb', 'ccc'];
// const abc2 = abc.join(', ');
// console.log(abc2);