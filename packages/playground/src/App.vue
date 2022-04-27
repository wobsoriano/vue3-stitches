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

const CheckoutButton = styled(BaseButton, {
  // variants: {},
})
</script>

<template>
  <CheckoutButton colour="violet">
    Hello
  </CheckoutButton>
</template>
