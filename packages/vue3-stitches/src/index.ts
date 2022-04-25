import { getCachedConfig } from './utility/getCachedConfig'
import type { VueStitches } from './create-stitches'

export { createStitches } from './create-stitches'
export { defaultThemeMap } from '@stitches/core'

export const createTheme: VueStitches['createTheme'] = (...args: any[]) => getCachedConfig().createTheme(...args)
export const globalCss: VueStitches['globalCss'] = (...args: any[]) => getCachedConfig().globalCss(...args)
export const keyframes: VueStitches['keyframes'] = (...args: any[]) => getCachedConfig().keyframes(...args)

export const css: VueStitches['css'] = (...args: any[]) => getCachedConfig().css(...args)
export const styled: VueStitches['styled'] = (...args: any[]) => getCachedConfig().styled(...args)
