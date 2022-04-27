import type { ConfigType, DefaultThemeMap } from '@stitches/core/types/config'
import type * as CSSUtil from '@stitches/core/types/css-util'
import type * as Util from '@stitches/core/types/util'
import type { RemoveIndex } from '@stitches/core/types/stitches'
import type Stitches from '@stitches/core/types/stitches'
import { createStitches as createStitchesCore } from '@stitches/core'
import { defineComponent, h } from 'vue'
import type * as StyledComponent from './styled-component'

export interface EmptyObject {}

export interface VueStitches <Prefix extends string = '', Media = EmptyObject, Theme = EmptyObject, ThemeMap = EmptyObject, Utils = EmptyObject> extends
  Stitches<Prefix, Media, Theme, ThemeMap, Utils> {
  styled: {
    <
      Type extends keyof StyledComponent.IntrinsicElementAttributes,
      Composers extends (
        | string
        | Util.Function
        | Record<string, unknown>
      )[],
      CSS = CSSUtil.CSS<Media, Theme, ThemeMap, Utils>,
    >(
      type: Type,
      ...composers: {
        [K in keyof Composers]: (
          string extends Composers[K]
            ? Composers[K]
            : Composers[K] extends string| Util.Function
              ? Composers[K]
              : RemoveIndex<CSS> & {
                variants?: {
                  [Name in string]: {
                    [Pair in number | string]: CSS
                  }
                }
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
      CSSUtil.CSS<Media, Theme, ThemeMap, Utils>
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

  const styled = (tag: any, composers: any) => {
    const result = css(composers)
    return defineComponent({
      setup(_props, { slots, attrs }) {
        return () => {
          const { className } = result(attrs)
          const classes = [className]

          return h(tag, {
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
