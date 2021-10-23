const files = require.context('.', false, /\.js$/)
const modules = files.keys().reduce((pre, next) => {
  if (next === './index.js') return pre
  if (!files(next).default) return pre
  return [...pre, files(next).default]
}, [])

export default modules
