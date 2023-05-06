import { spawn } from 'node:child_process'

export async function $(command: TemplateStringsArray) {
  return new Promise((r, j) => {
    console.log(`command`, command)
    const commandStr = command[0]

    let result: Array<Uint8Array>  = []
    let size = 0;
    const ls = spawn(commandStr, {shell: true})
    ls.stdout.on('data', (data) => {
      result.push(data)
      size += data.length;
      // console.log(`stdout: ${data}`)
    })
  
    ls.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`)
    })
  
    ls.on('close', (code) => {
      r(Buffer.concat(result, size).toString())
      console.log(`child process exited with code ${code}`)
    })
    
  })
}