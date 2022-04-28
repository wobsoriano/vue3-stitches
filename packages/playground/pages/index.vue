<script setup lang="ts">
import { styled } from 'vue3-stitches'

const Button = styled('button', {
  variants: {
    color: {
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
  <Button color="violet">
    Button
  </Button>
</template>
