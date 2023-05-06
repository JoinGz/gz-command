import { describe, expect, test, vi } from "vitest"
import {$} from '../src/core'

describe("core", () => {
  test('是否正确执行脚本', async () => {
    const EnvValue = 'test_name'
    vi.stubEnv('GZTEST', EnvValue)
    const result = await $`echo %GZTEST%` // cmd
    expect(result).toContain(EnvValue)
    vi.unstubAllEnvs()
  })
})