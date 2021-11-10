import radio from './radio'
import checkbox from './checkbox'
import input from './input'

const tools = [radio, checkbox, input]

export const toolsMap = tools.reduce((pre, next) => {
  return {
    ...pre,
    [next.type]: next
  }
}, {})

export default tools
