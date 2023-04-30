export type WorkTag =
  | typeof FunctionComponent
  | typeof HostRoot
  | typeof HostComponent
  | typeof HostText

//
export const FunctionComponent = 0
// 项目挂在的根结点 对应的fiber节点的类型
export const HostRoot = 3
// div
export const HostComponent = 5
// div 下的文本
export const HostText = 6
