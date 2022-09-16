const prompt = require ('prompt-sync') ({sigint: true});
const fs = require ('fs'); //filesystem
const {resolve} = require ('path');
const path = require ('path'); // non global

const pathname = path.join (__dirname, '/NumberSepration');

const num = prompt ('Enter a number: ');
console.log ('Your number=');
console.log (Number (num));

if (Number (num % 2 == 0)) {
  console.log ('The number is even.');
  fs.writeFileSync (pathname + '/even.txt', num);
  try {
    const data = fs.readFileSync (pathname + '/even.txt', 'utf8');
    console.log ('Read data of even.txt file:-', data);
  } catch (err) {
    console.error (err);
  }
} else {
  console.log ('The number is odd.');
  fs.writeFileSync (pathname + '/odd.txt', num);
  try {
    const data = fs.readFileSync (pathname + '/odd.txt', 'utf8');
    console.log ('Read data of odd.txt file:-', data);
  } catch (err) {
    console.error (err);
  }
}


// for delete files

// fs.unlinkSync(pathname + '/even.txt');
// console.log ('Unlink data of even.txt file');
// fs.unlinkSync(pathname + '/odd.txt');
// console.log ('Unlink data of odd.txt file');


