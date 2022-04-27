import { defineComponent, h } from 'vue'

const Base = defineComponent({
  props: {
    color: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return () => h('button', {
      class: props.color,
    })
  },
})

export const Extended = defineComponent({
  extends: Base,
  props: {
    bgColor: {
      type: String,
      required: true,
    },
  },
  emits: ['hello', 'world'],
  setup() {
    return () => h(Base, {
      color: 'red',
    })
  },
})
