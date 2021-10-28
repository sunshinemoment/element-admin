const layouts = ['pro', 'directives', 'charts', 'media', 'demo']

const files = require.context('.', false, /\.js$/)
const filesKeys = files.keys()
const layoutsFilesKeys = filesKeys.sort((a, b) => {
  const aIndex = layouts.findIndex((str) => a.includes(str))
  const bIndex = layouts.findIndex((str) => b.includes(str))
  return aIndex - bIndex
})

const modules = layoutsFilesKeys.reduce((pre, next) => {
  if (next === './index.js') return pre
  if (process.env.NODE_ENV === 'production' && next === './demo.js') {
    return pre
  }
  if (!files(next).default) return pre
  return [...pre, files(next).default]
}, [])

export default modules
