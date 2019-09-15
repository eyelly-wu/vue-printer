<script>
  import print from '@eyelly/print'

  export default {
    props: {
      shotcut: {
        type: Boolean,
        default: true
      },
      content: {
        type: Object,
        required: true,
        validator(value) {
          if (typeof value !== 'object') {
            return false
          }
          const { refs, refName } = value
          if (typeof refs !== 'object' || typeof refName !== 'string' || typeof refs[refName] !== 'object') {
            return false
          }
          return true
        }
      },
      newWindow: {
        type: Boolean,
        default: false
      },
      title: String
    },
    render(h) {
      let self = this
      return h('div', {
        on: {
          click() {
            self._print()
          }
        }
      }, [self.$slots.default])
    },
    methods: {
      _print() {
        const { refName, refs } = this.content
        const printContent = refs[refName]
        print({
          content: printContent,
          newWindow: this.newWindow,
          title: this.title
        })
      },
      onKeyDown(e) {
        const { keyCode, ctrlKey, metaKey } = e
        if ((keyCode === 80 && ctrlKey) || (keyCode === 80 && metaKey)) {
          e.preventDefault()
          this._print()
        }
      }
    },
    mounted() {
      this.shotcut && document.addEventListener('keydown', this.onKeyDown)
    },
    beforeDestroy() {
      this.shotcut && document.removeEventListener('keydown', this.onkeydown)
    }
  }
</script>
