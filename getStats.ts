const fetch = require('node-fetch');


const chain = 'bitcoin'


async function main(){

const endPoint = `https://api.blockchair.com/ethereum/raw/transaction/0x93fa9a3ac6190022adc75d1d83e3d86e0a99ac1eb88f80fec59599f55931766e`

console.log(endPoint);


const response = await fetch(endPoint);
const body = await response.text();

console.log(JSON.parse(body));


}

main();




