import { describe, expect, test, vi } from "vitest"
import {$} from '../src/core'
import { existsSync, rmdirSync } from 'node:fs';


describe("core", () => {
  test('是否正确执行脚本', async () => {
    const EnvValue = 'test_name'
    vi.stubEnv('GZTEST', EnvValue)
    const result = await $`echo $GZTEST` // cmd
    expect(result).toContain(EnvValue) // bash
    vi.unstubAllEnvs()
  })
  test('是否正确创建文件夹', async () => {
    expect.assertions(1)
    const testPath = `./gz_command_test`
    if (existsSync(testPath)) {
      return
    }
    const result = await $`mkdir ${testPath}` // cmd
    if (existsSync(testPath)) {
      rmdirSync(testPath)
      expect(result).toBe('')
    }
  })
  test('是否正确创建文件夹 far & bar', async () => {
    expect.assertions(1)
    const testPath = `./far & bar`
    if (existsSync(testPath)) {
      return
    }
    const result = await $`mkdir ${testPath}` // cmd
    if (existsSync(testPath)) {
      rmdirSync(testPath)
      expect(result).toBe('')
    }
  })
})