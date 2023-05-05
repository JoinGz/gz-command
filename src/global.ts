import { spawn } from 'node:child_process'

function $(command: string) {
  console.log(`command`, command)
  const commandStr = command[0]
  const user_commandArr = commandStr.split(' ')
  const [firstCommand, ...arg] = user_commandArr
  const ls = spawn(firstCommand, arg)
  ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`)
  })

  ls.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`)
  })

  ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`)
  })
}

Object.assign(global, { $ })
