<script setup lang="ts">
import { createStitches } from 'vue3-stitches'
import type { ComponentProps, VariantProps } from 'vue3-stitches'

const { styled, css } = createStitches()

const Btn = styled('button', {
  variants: {
    colour: {
      violet: {
        'backgroundColor': 'blueviolet',
        'color': 'red',
        '&:hover': {
          backgroundColor: 'darkviolet',
        },
      },
      gray: {
        'backgroundColor': 'gainsboro',
        '&:hover': {
          backgroundColor: 'lightgray',
        },
      },
    },
  },
})
</script>

<template>
  <Btn colour="violet">
    Hello
  </Btn>
</template>
