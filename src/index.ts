import { createRequire } from 'node:module';
import { resolve } from "node:path";
import "./global.js"

console.log('gz - nodejs - command')

const userFileRelativePath = process.argv[2]
console.log(`userFileRelativePath: `, userFileRelativePath)



const userFileAbsolutePath = resolve(userFileRelativePath)
console.log(`userFileAbsolutePath: `, userFileAbsolutePath)
/**
 * createRequire的参数是一个路径，返回基于此路径的require函数。后面在调用require就是基于createRequire的路径
 */
const require = createRequire(userFileAbsolutePath);

// sibling-module.js is a CommonJS module.
const siblingModule = require(userFileRelativePath);


