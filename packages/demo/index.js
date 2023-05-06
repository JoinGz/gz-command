#!/usr/bin/env gz
console.log(`demo, 需要执行的文件`);


( async ()=>{
  const result = await $`cat package.json`;
  console.log(result)
  $`ls -lh`;

})()