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
