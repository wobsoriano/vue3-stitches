import type * as CSSUtil from '@stitches/core/types/css-util'
import type * as Config from '@stitches/core/types/config'
import type { VueStitches } from './features/styled'
import { getCachedConfig } from './utility/getCachedConfig'
import type * as StyledComponent from './features/styled-component'

export type { $$PropertyValue, $$ScaleValue, $$ThemeValue } from '@stitches/core'

export type CreateStitches = Config.CreateStitches
export type CSSProperties = CSSUtil.CSSProperties
export type DefaultThemeMap = Config.DefaultThemeMap
export type FontFace = CSSUtil.Native.AtRule.FontFace

/** Returns a Style interface from a configuration, leveraging the given media and style map. */
export type CSS<
  Config extends {
    media?: {}
    theme?: {}
    themeMap?: {}
    utils?: {}
  } = {
    media: {}
    theme: {}
    themeMap: {}
    utils: {}
  },
  > = CSSUtil.CSS<
  Config['media'],
  Config['theme'],
  Config['themeMap'],
  Config['utils']
>

/** Returns the properties, attributes, and children expected by a component. */
export type ComponentProps<Component> = Component extends ((...args: any[]) => any) ? Parameters<Component>[0] : never

/** Returns a type that expects a value to be a kind of CSS property value. */
export type PropertyValue<Property extends keyof CSSUtil.CSSProperties, Config = null> = (
  Config extends null
    ? { readonly [K in CSSUtil.$$PropertyValue]: Property }
    : Config extends Record<string, any>
      ? CSSUtil.CSS<
      Config['media'],
      Config['theme'],
      Config['themeMap'],
      Config['utils']
    >[Property]
      : never
)

/** Returns a type that expects a value to be a kind of theme scale value. */
export type ScaleValue<Scale, Config = null> = (
  Config extends null
    ? { readonly [K in CSSUtil.$$ScaleValue]: Scale }
    : Config extends Record<string, any>
      ? Scale extends keyof Config['theme']
        ? `$${string & keyof Config['theme'][Scale]}`
        : never
      : never
)

/** Returns a type that suggests variants from a component as possible prop values. */
export type VariantProps<Component extends Record<symbol | string, any>> = StyledComponent.TransformProps<Component[StyledComponent.$$StyledComponentProps], Component[StyledComponent.$$StyledComponentMedia]>

/** Map of CSS properties to token scales. */
export { defaultThemeMap } from '@stitches/core'

/** Returns a library used to create styles. */
export { createStitches } from './features/styled'

/** Returns an object representing a theme. */
export const createTheme: VueStitches['createTheme'] = (...args: any[]) => getCachedConfig().createTheme(...args)

/** Returns a function that applies globalCss styles. */
export const globalCss: VueStitches['globalCss'] = (...args: any[]) => getCachedConfig().globalCss(...args)

/** Returns an object that applies `@keyframes` styles. */
export const keyframes: VueStitches['keyframes'] = (...args: any[]) => getCachedConfig().keyframes(...args)

/** Returns a function that applies styles and variants for a specific class. */
export const css: VueStitches['css'] = (...args: any[]) => getCachedConfig().css(...args)

/** Returns a function that applies styles and variants for a specific class. */
export const styled: VueStitches['styled'] = (...args: any[]) => getCachedConfig().styled(...args)

export {
  default as TestComponent,
} from './test'
