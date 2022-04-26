<script setup lang="ts">
import { createStitches } from 'vue3-stitches'
import type { VariantProps } from '@stitches/core'

const { css, styled } = createStitches({
  media: {
    bp1: '(min-width: 640px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
  },
  theme: {
    colors: {
      red1: 'rgb(253,37,37)',
    },
  },
})

const Btn = styled('button', {
  variants: {
    colour: {
      violet: {
        'backgroundColor': 'blueviolet',
        'color': '$red1',
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
    size: {
      small: {
        fontSize: '13px',
        height: '25px',
        paddingRight: '10px',
        paddingLeft: '10px',
      },
      large: {
        fontSize: '15px',
        height: '35px',
        paddingLeft: '15px',
        paddingRight: '15px',
      },
    },
  },
})
</script>

<template>
  <div class="App">
    <Btn colour="violet" size="small">
      Hello
    </Btn>
  </div>
</template>
