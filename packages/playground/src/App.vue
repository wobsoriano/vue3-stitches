<script setup lang="ts">
import { createStitches } from 'vue3-stitches'

const { styled } = createStitches()

const BaseButton = styled('button', {
  variants: {
    color: {
      violet: {
        'backgroundColor': 'blueviolet',
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
  <BaseButton color="gray">
    Button
  </BaseButton>
</template>
