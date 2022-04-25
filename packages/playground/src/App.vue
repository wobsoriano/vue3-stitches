<script setup lang="ts">
import { createStitches } from 'vue3-stitches'

const { styled } = createStitches()

const Btn = styled('button', {
  variants: {
    colour: {
      violet: {
        'backgroundColor': 'blueviolet',
        'color': 'white',
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
  <div class="App">
    <Btn>
      Hello
    </Btn>
  </div>
</template>
