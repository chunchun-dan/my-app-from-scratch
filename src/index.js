import './style.css';
import Icon from './digimon.png';
import Data from './data/data.xml';
import Notes from './data/data.csv';
// Warning: Should not import the named export 'data' (imported as 'data') from default-exporting module (only default export is available soon)
import { data } from './data/data.json';
import Toml from './data/data.toml';
import Yaml from './data/data.yaml';
import Json5 from './data/data.json5';

console.log(Toml.title); // output `TOML Example`
console.log(Toml.owner.name); // output `Tom Preston-Werner`

console.log(Yaml.title); // output `YAML Example`
console.log(Yaml.owner.name); // output `Tom Preston-Werner`

console.log(Json5.title); // output `JSON5 Example`
console.log(Json5.owner.name); // output `Tom Preston-Werner`

function component() {
  const element = document.createElement('div');

  element.innerHTML = "Hello World!";
  element.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  console.log(Data);
  console.log(Notes);
  console.log(data);

  return element;
}

document.body.appendChild(component());
