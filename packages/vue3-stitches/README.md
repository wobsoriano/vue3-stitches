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

## Available functions

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

## Configure Stitches

To configure Stitches, create a `stitches.config.ts` file (`.js` works too) and import the `createStitches` function.

```ts
// stitches.config.ts
import { createStitches } from 'vue3-stitches'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      gray400: 'gainsboro',
      gray500: 'lightgray',
    },
  },
  media: {
    bp1: '(min-width: 480px)',
  },
  utils: {
    marginX: value => ({ marginLeft: value, marginRight: value }),
  },
})
```

From this point onwards, you'll be importing `styled` and other functions from `stitches.config`.

```vue
<script setup>
import { styled } from 'path-to/stitches.config'

const Button = styled('button', {})
</script>

<template>
  <Button>Button</Button>
</template>
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

## Composing Components

```vue
<script setup>
import { styled } from 'vue3-stitches'

const BaseButton = styled('button', {})

const CheckoutButton = styled(BaseButton, {
  'borderRadius': 0,
  'backgroundColor': 'hotpink',
  'color': 'white',
  '&:hover': {
    backgroundColor: 'deeppink',
  },
})

</script>

<template>
  <BaseButton>Base button</BaseButton>
  <CheckoutButton>Checkout button</CheckoutButton>
</template>
```

## Server-Side Rendering

You can get access to the CSS string by using the `getCssText` function. This function is made available by the `createStitches` function.

Here's an example of SSR with Nuxt 3

```vue
<script setup lang="ts">
import { getCssText } from '~/stitches.config'
</script>

<template>
  <div>
    <Head>
      <Style id="stitches" :children="getCssText()" />
    </Head>
    <NuxtPage />
  </div>
</template>
```

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## License

MIT
