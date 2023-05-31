#!/usr/bin/env zx
console.log(`demo`);


 ( async ()=>{
  const result = await $`ll `;
  console.log(result)
  await $`ls -lh`;

})()