import {Key, Props, Ref} from 'shared/ReactTypes'
import {WorkTag} from './workTags'
import {Flags, NoFlags} from './fiberFlags'

export class FiberNode {
  type: any
  tag: WorkTag
  pendingProps: Props
  key: Key
  ref: Ref
  stateNode: any
  return: FiberNode | null
  sibling: FiberNode | null
  child: FiberNode | null
  index: number
  memoizedProps: Props | null

  alternate: FiberNode | null

  flags: Flags

  constructor(tag: WorkTag, pendingProps: Props, key: Key) {
    // 实例
    this.tag = tag
    this.key = key

    this.stateNode = null

    this.type = null

    // 构成树状结构
    // 指向父fiberNode
    this.return = null
    this.sibling = null
    this.child = null
    this.index = 0
    this.ref = null

    // 作为工作单元
    this.pendingProps = pendingProps
    this.memoizedProps = null

    this.alternate = null

    this.flags = NoFlags
  }
}
