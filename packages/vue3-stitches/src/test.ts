import type { PropType } from 'vue'
import { defineComponent, h } from 'vue'
import { createStitches } from './create-stitches'

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

type ButtonInstance = InstanceType<typeof Base>

// defineProps<{
//   label: ButtonInstance['$props']['label'] | number
// }>()

export const Modal = defineComponent({
  name: 'Modal',
  props: {
    label: {
      type: [String, Number] as PropType<ButtonInstance['$props']['color'] | number>,
    },
  },
})
