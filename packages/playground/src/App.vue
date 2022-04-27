<script setup lang="ts">
import { createStitches } from 'vue3-stitches'

const { styled } = createStitches()

const BaseButton = styled('button', {
  variants: {
    colour: {
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

const CheckoutButton = styled(BaseButton, {
  variants: {
    colour: {
      red: {
        'backgroundColor': 'red',
        '&:hover': {
          backgroundColor: 'white',
        },
      },
    },
  },
})
</script>

<template>
  <CheckoutButton colour="red" :css="{}">
    Hello
  </CheckoutButton>
</template>
