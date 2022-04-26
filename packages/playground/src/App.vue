<script setup lang="ts">
import { createStitches } from 'vue3-stitches'

const { styled } = createStitches()

const Button = styled('button', {
  variants: {
    color: {
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
  <Button color="violet">
    Hello
  </Button>
</template>
