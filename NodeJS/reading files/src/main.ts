import {login} from './functions';

async function main(){
  
  let res = await login("boom@gmail.com","EliBoom123!");
  
  console.log('res -> ',res);

} 

main();

