import which from 'which'
import { spawn } from 'node:child_process'

const defaultOptions: { shell: boolean | string; preFix: string } = {
  shell: true,
  preFix: 'set -euo pipefail;',
}

try {
  defaultOptions.shell = which.sync('bash')
} catch (error) {
  if (process.platform === 'win32') {
    defaultOptions.shell = which.sync('powershell.exe')
  }
}

export async function $(command: TemplateStringsArray, ...values: string[]) {
  return new Promise((r, j) => {
    console.log(`command`, command)
    console.log(`values`, values)
    const commandStr = command[0]

    let result: Array<Uint8Array> = []
    let size = 0
    const cmd = `${defaultOptions.preFix} ${commandStr} '${values[0]}'`
    const ls = spawn(cmd, {
      shell: defaultOptions.shell,
      stdio: ['inherit', 'pipe', 'pipe'],
    })
    ls.stdout.on('data', (data) => {
      log({ data, type: 'stdout' })
      result.push(data)
      size += data.length
      // console.log(`stdout: ${data}`)
    })

    ls.stderr.on('data', (data) => {
      log({ data, type: 'stderr' })
      j('翻车')
    })

    ls.on('close', (code) => {
      r(Buffer.concat(result, size).toString())
      console.log(`child process exited with code ${code}`)
    })
  })
}

type logEntry = {
  type: 'stdout' | 'stderr'
  data: Buffer
}
function log(entry: logEntry) {
  switch (entry.type) {
    case 'stderr':
      process.stderr.write(entry.data)
      break
    case 'stdout':
      process.stdout.write(entry.data)
      break

    default:
      break
  }
}
