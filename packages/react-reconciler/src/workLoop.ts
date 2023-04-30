import {beginWork} from './beginWork'
import {completeWork} from './completeWork'
import {FiberNode} from './fiber'

let workInProgress: FiberNode | null = null

function prepareRefreshStack(fiber: FiberNode) {
  workInProgress = fiber
}

function renderRoot(root: FiberNode) {
  // 初始化
  prepareRefreshStack(root)

  do {
    try {
      workLoop()
      break
    } catch (e) {
      console.warn('workLoop error')
      workInProgress = null
    }
  } while (true)
}

function workLoop() {
  while (workInProgress !== null) {
    preformUnitOfWork(workInProgress)
  }
}

function preformUnitOfWork(fiber: FiberNode) {
  const next = beginWork(fiber)
  fiber.memoizedProps = fiber.pendingProps
  if (next === null) {
    //到最深的一层
    completeUnitOfWork(fiber)
  } else {
    // 如果没有 继续向下遍历
    workInProgress = next
  }
}

function completeUnitOfWork(fiber: FiberNode) {
  let node: FiberNode | null = fiber
  do {
    completeWork(node)
    const sibling = node.sibling
    if (sibling !== null) {
      workInProgress = sibling
      return
    } else {
      node = node.return
      workInProgress = node
    }
  } while (node !== null)
}
