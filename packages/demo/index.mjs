#!/usr/bin/env gz
console.log(`demo, 需要执行的文件`);

const result = await $`ll `;
console.log(result)
await $`ls -lh`;