import { getCachedConfig } from './utility/getCachedConfig'
import type { VueStitches } from './create-stitches'
import type * as StyledComponent from './styled-component'

export { createStitches } from './create-stitches'
export { defaultThemeMap } from '@stitches/core'

export const createTheme: VueStitches['createTheme'] = (...args: any[]) => getCachedConfig().createTheme(...args)
export const globalCss: VueStitches['globalCss'] = (...args: any[]) => getCachedConfig().globalCss(...args)
export const keyframes: VueStitches['keyframes'] = (...args: any[]) => getCachedConfig().keyframes(...args)

export const css: VueStitches['css'] = (...args: any[]) => getCachedConfig().css(...args)
export const styled: VueStitches['styled'] = (...args: any[]) => getCachedConfig().styled(...args)

export {
  default as TestComponent,
} from './test'

export type VariantProps<Component extends Record<symbol | string, any>> = StyledComponent.TransformProps<Component[StyledComponent.$$StyledComponentProps], Component[StyledComponent.$$StyledComponentMedia]>
