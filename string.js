
//toLowerCase 
let  product = 'mAcbook air';
let newProduct = 'MacbOOk air';

if(product.toLowerCase() == newProduct.toLowerCase()){
    console.log("item is matched");
}else{
    console.log('item does not matched');
}



 let jsString = 'The JavaScript string is an object that represents a sequence of characters.'
 let newString = jsString.indexOf('is');
 console.log(newString);
 //-1

//includes check out result is true
 let stringIncludes =jsString.includes('an');
 console.log(stringIncludes);


//  let products = [
//      'lg laptop 256gb',
//      'sony Laptop 512gb',
//      'apple laptop 1tb',
//      'mi laptop 128gb',
//      'asuss laptop 256gb',
//      'nokia new Laptop'
//  ];




//  let searching ='laptop';

//  const result = [ ];
//  for ( const item of products){
//      if(item.toLowerCase().indexOf(searching.toLowerCase()) != -1){
//         result.push(item);
//      }
//  }

//  console.log(result);



//  let products = [
//      'lg laptop 256gb',
//      'sony Laptop 512gb',
//      'apple laptop 1tb',
//      'mi laptop 128gb',
//      'asuss laptop 256gb',
//      'nokia new Laptop'
//  ];




//  let searching ='laptop';

//  const result = [ ];
//  for ( const item of products){
//      if(item.toLowerCase().includes(searching.toLowerCase())){
//         result.push(item);
//      }
//  }

//  console.log(result);



//  let products = [
//      'lg laptop 256gb',
//      'sony Laptop 512gb',
//      'apple laptop 1tb',
//      'mi laptop 128gb',
//      'asuss laptop 256gb',
//      'nokia new Laptop'
//  ];




//  let searching ='sony';

//  const result = [ ];
//  for ( const item of products){
//      if(item.toLowerCase().startsWith(searching.toLowerCase())){
//         result.push(item);
//      }
//  }




//  console.log(result);



//  let products = [
//      'lg laptop 256gb',
//      'sony Laptop 512gb',
//      'apple laptop 1tb',
//      'mi laptop 128gb',
//      'asuss laptop 256gb',
//      'nokia new Laptop'
//  ];

//  let searching ='1tb';

//  const result = [ ];
//  for ( const item of products){
//      if(item.toLowerCase().endsWith(searching.toLowerCase())){
//         result.push(item);
//      }
//  }

//  console.log(result);





let jsSplit = 'The JavaScript string is an object that represents a sequence of characters.';
let newSplit = jsSplit.split(' ');
console.log(newSplit);

let jsSplit1 = 'The JavaScript string is an object that represents a sequence of characters.';
let newSplit1 = jsSplit1.split('t');
console.log(newSplit1);

let jsSlice = 'The JavaScript string is an object that represents a sequence of characters.';
let newSlice = jsSlice.slice(1,13);
console.log(newSlice);

let jsSub = 'The JavaScript string is an object that represents a sequence of characters.';
let newSub = jsSub.substr(1,13);
console.log(newSub);

let jsSubString = 'The JavaScript string is an object that represents a sequence of characters.';
let newSubString = jsSubString.substring(1,13);
console.log(newSubString);


// contact 

const firstName = 'sakib';
const lastName = 'hassan';

const fullName = firstName + lastName;
console.log(fullName);


const firstName1 = 'sakib';
const lastName1 = 'hassan';

const fullName1 = firstName1.concat(lastName)
console.log(fullName1);

//join 

const wordList = [ 'a', 'b', 'c', 'd'];
const newWordList = wordList.join( ' ');
console.log(newWordList);

const wordList1 = [ 'a', 'b', 'c', 'd'];
const newWordList1 = wordList1.join('');
console.log(newWordList1);


const wordList2 = [ 'a', 'b', 'c', 'd'];
const newWordList2 = wordList2.join(',');
console.log(newWordList2);


const wordList3 = [ 'a', 'b', 'c', 'd'];
const newWordList3 = wordList3.join('line ');
console.log(newWordList3);



