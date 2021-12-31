const layouts = ['form', 'list', 'pro'] //  'directives', 'charts', 'media', 'demo'
const layoutKeys = layouts.map((item) => `./${item}.js`)

const files = require.context('.', false, /\.js$/)
const filesKeys = files.keys()
const layoutsFilesKeys = filesKeys.sort((a, b) => {
  const aIndex = layouts.findIndex((str) => a.includes(str))
  const bIndex = layouts.findIndex((str) => b.includes(str))
  return aIndex - bIndex
})

const modules = layoutsFilesKeys.reduce((pre, next) => {
  if (next === './index.js') return pre
  if (!layoutKeys.includes(next)) {
    return pre
  }
  if (!files(next).default) return pre
  return [...pre, files(next).default]
}, [])

export default modules
