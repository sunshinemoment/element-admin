export function normalizeReturnRender(h, content) {
  if (content === null || content === undefined) {
    return ''
  }

  // 返回的元素自带标签 那么直接返回
  if (content.constructor.name === 'VNode') {
    if (content.tag === 'template') {
      // 处理元素为空标签的情况下, 默认修改为span
      content.tag = 'div'
    }
    return content
  }

  // 返回的元素没有标签, 外面包裹一层标签
  return <span>{content}</span>
}
