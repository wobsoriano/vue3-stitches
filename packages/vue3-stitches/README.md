# Vue Stitches

Vue 3 wrapper for [stitches](https://github.com/modulz/stitches) with styled components support.

## Quick Start

Install it:

```bash
pnpm add @stitches/core vue3-stitches # or npm or yarn
```

Use the `styled` function to create a component and add styles to it:

```ts
// button.ts
import { styled } from 'vue3-stitches'

export const Button = styled('button', {
  'backgroundColor': 'gainsboro',
  'borderRadius': '9999px',
  'fontSize': '13px',
  'padding': '10px 15px',
  '&:hover': {
    backgroundColor: 'lightgray',
  },
})
```

Import and use the styled component:

```vue
<script setup>
import { Button } from './button'
</script>

<template>
  <Button>Button</Button>
</template>
```

## Available function

```ts
import {
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme,
} from 'vue3-stitches'
```

## Overriding Styles

```vue
<script setup>
import { styled } from 'vue3-stitches'

const Button = styled('button', {})
</script>

<template>
  <Button
    :css="{
      borderRadius: '0',
      '&:hover': {
        backgroundColor: 'black',
        color: 'white'
      }
    }"
  >
    Button
  </Button>
</template>
```

## License

MIT
