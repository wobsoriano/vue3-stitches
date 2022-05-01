import type { ConfigType, DefaultThemeMap } from '@stitches/core/types/config'
import type * as CSSUtil from '@stitches/core/types/css-util'
import type * as Util from '@stitches/core/types/util'
import type { RemoveIndex } from '@stitches/core/types/stitches'
import type Stitches from '@stitches/core/types/stitches'
import { createStitches as createStitchesCore } from '@stitches/core'
import { defineComponent, h } from 'vue'
import type * as Vue from 'vue'
import type * as StyledComponent from './styled-component'

export interface EmptyObject {}

export interface VueStitches<
  Prefix extends string = '',
  Media extends EmptyObject = {},
  Theme extends EmptyObject = {},
  ThemeMap extends EmptyObject = {},
  Utils extends EmptyObject = {},
> extends Stitches<Prefix, Media, Theme, ThemeMap, Utils> {
  styled: {
    <
      Type extends keyof StyledComponent.IntrinsicElementAttributes | Vue.Component | Util.Function,
      Composers extends (
        | string
        | Vue.Component
        | Record<string, unknown>
      )[],
      CSS = CSSUtil.CSS<Media, Theme, ThemeMap, Utils>,
    >(
      type: Type,
      ...composers: {
        [K in keyof Composers]: (
          // Strings, Vue Components, and Functions can be skipped over
          string extends Composers[K]
            ? Composers[K]
            : Composers[K] extends string | Vue.Component | Util.Function
              ? Composers[K]
              : RemoveIndex<CSS> & {
                /** The **variants** property lets you set a subclass of styles based on a key-value pair.
                 *
                 * [Read Documentation](https://stitches.dev/docs/variants)
                 */
                variants?: {
                  [Name in string]: {
                    [Pair in number | string]: CSS
                  }
                }
                /** The **compoundVariants** property lets you to set a subclass of styles based on a combination of active variants.
                 *
                 * [Read Documentation](https://stitches.dev/docs/variants#compound-variants)
                 */
                compoundVariants?: (
                  & (
                    'variants' extends keyof Composers[K]
                      ? {
                          [Name in keyof Composers[K]['variants']]?: Util.Widen<keyof Composers[K]['variants'][Name]> | Util.String
                        }
                      : Util.WideObject
                  )
                  & {
                    css: CSS
                  }
                )[]
                /** The **defaultVariants** property allows you to predefine the active key-value pairs of variants.
                 *
                 * [Read Documentation](https://stitches.dev/docs/variants#default-variants)
                 */
                defaultVariants?: (
                  'variants' extends keyof Composers[K]
                    ? {
                        [Name in keyof Composers[K]['variants']]?: Util.Widen<keyof Composers[K]['variants'][Name]> | Util.String
                      }
                    : Util.WideObject
                )
              } & CSS & {
                [K2 in keyof Composers[K]]: K2 extends 'compoundVariants' | 'defaultVariants' | 'variants'
                  ? unknown
                  : K2 extends keyof CSS
                    ? CSS[K2]
                    : unknown
              }
        )
      }
    ): StyledComponent.StyledComponent<
      Type,
      StyledComponent.StyledComponentProps<Composers>,
      Media,
      CSSUtil.CSS<Media, Theme, ThemeMap, Utils>,
      Type extends StyledComponent.StyledComponent<any, infer IP, any, any> ? IP : {}
    >
  }
}

export const createStitches = <Prefix extends string = string,
  Media extends EmptyObject = EmptyObject,
  Theme extends EmptyObject = EmptyObject,
  ThemeMap extends EmptyObject = DefaultThemeMap,
  Utils extends EmptyObject = EmptyObject>(config?: {
    media?: ConfigType.Media<Media>
    prefix?: ConfigType.Prefix<Prefix>
    theme?: ConfigType.Theme<Theme>
    themeMap?: ConfigType.ThemeMap<ThemeMap>
    utils?: ConfigType.Utils<Utils>
  }): VueStitches<Prefix, Media, Theme, ThemeMap, Utils> => {
  const stitchesCore = createStitchesCore(config)
  const { css } = stitchesCore

  const styled = (tagOrComponent: any, composers: any) => {
    const result = css(composers)

    const propsFromVariants: Record<string, any> = {}
    Object.keys(composers.variants || {}).forEach((key) => {
      propsFromVariants[key] = {
        type: String,
      }
    })

    return defineComponent({
      props: propsFromVariants,
      setup(props, { slots }) {
        return () => {
          const { className } = result(props)
          const classes = [className]

          return h(tagOrComponent, {
            class: classes,
          }, slots)
        }
      },
    })
  }

  return {
    ...stitchesCore,
    // @ts-expect-error: Fix later
    styled,
  }
}
