### npm link

#### 创建

在 A 项目下，执行`npm link`
此时会给 A 项目创建一个全局链接包(包名为 package.json 里的 name)。

在 B 项目中，执行`npm link A`，即可把 A 项目链接到 B 项目
取消链接： 在 B 项目中执行`npm unlink A`

取消 A 项目的全局链接，在 A 项目中执行：`npm unlink`

### 快捷创建

直接在 B 项目执行：`npm link ../..` (`../..`为 A 项目的地址，会自动完成全局链接包，和引入到目标项目)

### yarn link

`yarn` 没有 `npm` 的快捷创建

#### yarn 的 link

- 进入 B 项目，创建链接对象

yarn link

- 进入 A 项目，建立 B 项目的链接

yarn link B

- 解除链接，在A项目中执行

yarn unlink B

- 删除B的链接，在B项目中

yarn unlink

- yarn 对bin的link不友好



### pnpm link

  `pnpm` 不存在创建一个链接，如果要B项目引用A。直接去B项目执行
  `pnpm link ../..` (`../..`为 A 项目的地址，会自动引入到目标项目)

  在B项目卸载A依赖时，执行`pnpm unlink` （依然有问题，bin里面的文件没有卸载）

  `pnpm link --global` 不加路径就是把当前的项目弄到全局，加了就是把路径下的弄到全局。其他可以通过`pnpm link --global <pkg>`引用





