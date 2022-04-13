import { Message } from 'element-ui'

const cssText =
  'position: absolute;pointer-events:none;z-index:-9999;top:-9999px;opcity:0;'

const copy = {
  bind(el, { value }) {
    el.$value = value
    el.$handle = function () {
      const value = el.$value
      if (!value) {
        console.log('无复制内容')
        return
      }
      const textarea = document.createElement('textarea')
      textarea.value = value
      textarea.readOnly = true
      textarea.style.cssText = cssText
      document.body.appendChild(textarea)
      textarea.select()
      try {
        const result = document.execCommand('copy')
        if (result) {
          Message.success('Copy successfully')
        }
      } catch (error) {
        Message.error('Copy failed')
      }
      document.body.removeChild(textarea)
    }
    el.addEventListener('click', el.$handle)
  },
  componentUpdated(el, { value }) {
    el.$value = value
  },
  unbind(el) {
    el.removeEventListener('click', el.$handle)
  }
}
export default copy
