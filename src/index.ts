import { createRequire } from 'node:module';
import { resolve } from "node:path";
import "./global.js"
import { pathToFileURL } from 'node:url';

console.log('gz - nodejs - command')

const userFileRelativePath = process.argv[2]
console.log(`userFileRelativePath: `, userFileRelativePath)


console.log(`cwd:`, process.cwd())
const userFileAbsolutePath = resolve(userFileRelativePath)
console.log(`userFileAbsolutePath: `, userFileAbsolutePath)
/**
 * createRequire的参数是一个路径，返回基于此路径的require函数。后面在调用require就是基于createRequire的路径
 */
const require = createRequire(userFileAbsolutePath);

// sibling-module.js is a CommonJS module.
// const siblingModule = require(userFileRelativePath);

await (async () => {
  await import(pathToFileURL(userFileRelativePath).toString())
})().catch((e) => {
  console.log(`gz_catch`, e)
  process.exitCode = 1
})




