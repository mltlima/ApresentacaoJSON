import * as htmlparser2 from "htmlparser2";
import YAML from 'yaml'

const obj1 = {
    name: "joao",
    email: "joao@mail.com"
}

const obj2 = {
    name: "maria",
    email: "maria@mail.com"
}

const obj3 = {
    name: "joao",
    email: "joao@mail.com"
}

//console.log(obj1 === obj3)
//console.log(typeof JSON.stringify(obj1))
//console.log(JSON.stringify(obj1) == JSON.stringify(obj3))

const obj = {
    date: new Date(),
    id: "foo"
};

//console.log(obj);
const serialized = JSON.stringify(obj);
const deserialized = JSON.parse(serialized);
//console.log(deserialized.date);

const xml = `
    <EmpRecord>
    <Employee id="emp01">
    <name>Alex</name>
    <job>Developer</job>
    <skills>python, C/C++, paskal</skills>
    </Employee>

    <Employee id="emp02">
    <name>Bob</name>
    <job>Tester</job>
    <skills>lips, forton, REST APIs</skills>
    </Employee>

    </EmpRecord>
`

const parser = new htmlparser2.Parser({
    onopentag(name, attributes) {
        if (name === "script" && attributes.type === "text/javascript") {
            console.log("JS! Hooray!");
        }
    },
    ontext(text) {
        console.log(text);
    },
    onclosetag(tagname) {
        if (tagname === "script") {
            console.log("That's it?!");
        }
    },
});
//parser.write(xml);
//parser.end();

const toParse = `
    docker:
        - image: ubuntu:14.04
        - image: mongo:2.6.8
          command: [mongod, --smallfiles]
        - image: postgres:9.4.1
`

const yaml = YAML.parse(toParse);
console.log(yaml);