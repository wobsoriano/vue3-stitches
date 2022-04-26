# Vue Stitches

WIP

```ts
// button.ts
import { styled } from 'vue3-stitches'

export const Button = styled('button', {
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
```

```vue
<script setup lang="ts">
import { Button } from './button'
</script>

<template>
  <Button color="violet">
    WORK IN PROGRESS
  </Button>
</template>
```
