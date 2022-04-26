import { defineComponent, h } from 'vue'

export default defineComponent({
  props: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: false,
      default: '',
    },
  },
  setup(props) {
    return () => h('div', `${props.firstName}`)
  },
})
