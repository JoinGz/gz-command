import { describe, expect, test, } from "vitest"

await import('../src/index.ts')

describe("第一个命令", () => {
  test('cat', () => {
    // console.log(global.$)
    // expect(global.$`cat test.md`).toBe(1)
    expect(1).toBe(1)
  })
})