import type * as Util from '@stitches/core/types/util'
import type * as Vue from 'vue'

export type IntrinsicElementsKeys = keyof IntrinsicElementAttributes

type __VLS_NonUndefinedable<T> = T extends undefined ? never : T
type __VLS_TypePropsToRuntimeProps<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? {
    type: Vue.PropType<__VLS_NonUndefinedable<T[K]>>
  } : {
    type: Vue.PropType<T[K]>
    required: true
  };
}

export type StyledComponent<
  Type extends IntrinsicElementsKeys | Vue.Component | Util.Function = 'span',
  Props = {},
  Media = {},
  CSS = {},
  InnerProps = {},
> = Vue.DefineComponent<
  __VLS_TypePropsToRuntimeProps<TransformProps<Util.Assign<InnerProps, Props>, Media> & { css?: CSS }>,
  {},
  {},
  Vue.ComputedOptions,
  Vue.MethodOptions,
  Vue.ComponentOptionsMixin,
  Vue.ComponentOptionsMixin,
  Record<string, any>,
  string,
  Vue.VNodeProps & Vue.AllowedComponentProps & Vue.ComponentCustomProps,
  Vue.ExtractPropTypes<
    __VLS_TypePropsToRuntimeProps<TransformProps<Util.Assign<InnerProps, Props>, Media> & { css?: CSS }>
  > &
  (Type extends IntrinsicElementsKeys
    ? IntrinsicElementAttributes[Type]
    : {}),
  {}
> & {
  className: string
  selector: string

  [$$StyledComponentType]: Type
  [$$StyledComponentProps]: Props
  [$$StyledComponentMedia]: Media
}

/** Returns a new CSS Component. */
export interface CssComponent<
  Type = 'span',
  Props = {},
  Media = {},
  CSS = {},
> {
  (
    props?:
    & TransformProps<Props, Media>
    & {
      css?: CSS
    }
    & {
      [name in number | string]: any
    }
  ): string & {
    className: string
    selector: string
    props: {}
  }

  className: string
  selector: string

  [$$StyledComponentType]: Type
  [$$StyledComponentProps]: Props
  [$$StyledComponentMedia]: Media
}

export type TransformProps < Props, Media > = {
  [K in keyof Props]: (|
  Props[K] |
  (&
  {
    [KMedia in Util.Prefixed < '@', 'initial' | keyof Media > ]?: Props[K]
  } &
  {
    [KMedia in string]: Props[K]
  }
  )
  )
}

/** Unique symbol used to reference the type of a Styled Component. */
export declare const $$StyledComponentType: unique symbol

/** Unique symbol used to reference the type of a Styled Component. */
export type $$StyledComponentType = typeof $$StyledComponentType

/** Unique symbol used to reference the props of a Styled Component. */
export declare const $$StyledComponentProps: unique symbol

/** Unique symbol used to reference the props of a Styled Component. */
export type $$StyledComponentProps = typeof $$StyledComponentProps

/** Unique symbol used to reference the media passed into a Styled Component. */
export declare const $$StyledComponentMedia: unique symbol

/** Unique symbol used to reference the media passed into a Styled Component. */
export type $$StyledComponentMedia = typeof $$StyledComponentMedia

/** Returns a narrowed JSX element from the given tag name. */
// type IntrinsicElement<TagName> = TagName extends IntrinsicElementsKeys ? TagName : never

/** Returns the first Styled Component type from the given array of compositions. */
export type StyledComponentType < T extends any[] > = (
  T[0] extends never ?
    'span' :
    T[0] extends string ?
      T[0] :
      T[0] extends(props: any) => any ?
        T[0] :
        T[0] extends {
          [$$StyledComponentType]: unknown
        } ?
          T[0][$$StyledComponentType] :
          T extends[lead: any, ...tail: infer V] ?
            StyledComponentType < V >
            :
            never
)

/** Returns the cumulative variants from the given array of compositions. */
export type StyledComponentProps < T extends any[] > = (&
(
  $$StyledComponentProps extends keyof T[0] ?
    T[0][$$StyledComponentProps] :
    T[0] extends {
      variants: Record<string, unknown>
    } ?
        {
          [K in keyof T[0]['variants']]?: Util.Widen < keyof T[0]['variants'][K] >
        } :
        {}
) &
(
  T extends[lead: any, ...tail: infer V] ?
    StyledComponentProps < V >
    :
      {}
))

export interface IntrinsicElementAttributes {
  a: Vue.AnchorHTMLAttributes
  abbr: Vue.HTMLAttributes
  address: Vue.HTMLAttributes
  area: Vue.AreaHTMLAttributes
  article: Vue.HTMLAttributes
  aside: Vue.HTMLAttributes
  audio: Vue.AudioHTMLAttributes
  b: Vue.HTMLAttributes
  base: Vue.BaseHTMLAttributes
  bdi: Vue.HTMLAttributes
  bdo: Vue.HTMLAttributes
  blockquote: Vue.BlockquoteHTMLAttributes
  body: Vue.HTMLAttributes
  br: Vue.HTMLAttributes
  button: Vue.ButtonHTMLAttributes
  canvas: Vue.CanvasHTMLAttributes
  caption: Vue.HTMLAttributes
  cite: Vue.HTMLAttributes
  code: Vue.HTMLAttributes
  col: Vue.ColHTMLAttributes
  colgroup: Vue.ColgroupHTMLAttributes
  data: Vue.DataHTMLAttributes
  datalist: Vue.HTMLAttributes
  dd: Vue.HTMLAttributes
  del: Vue.DelHTMLAttributes
  details: Vue.DetailsHTMLAttributes
  dfn: Vue.HTMLAttributes
  dialog: Vue.DialogHTMLAttributes
  div: Vue.HTMLAttributes
  dl: Vue.HTMLAttributes
  dt: Vue.HTMLAttributes
  em: Vue.HTMLAttributes
  embed: Vue.EmbedHTMLAttributes
  fieldset: Vue.FieldsetHTMLAttributes
  figcaption: Vue.HTMLAttributes
  figure: Vue.HTMLAttributes
  footer: Vue.HTMLAttributes
  form: Vue.FormHTMLAttributes
  h1: Vue.HTMLAttributes
  h2: Vue.HTMLAttributes
  h3: Vue.HTMLAttributes
  h4: Vue.HTMLAttributes
  h5: Vue.HTMLAttributes
  h6: Vue.HTMLAttributes
  head: Vue.HTMLAttributes
  header: Vue.HTMLAttributes
  hgroup: Vue.HTMLAttributes
  hr: Vue.HTMLAttributes
  html: Vue.HtmlHTMLAttributes
  i: Vue.HTMLAttributes
  iframe: Vue.IframeHTMLAttributes
  img: Vue.ImgHTMLAttributes
  input: Vue.InputHTMLAttributes
  ins: Vue.InsHTMLAttributes
  kbd: Vue.HTMLAttributes
  keygen: Vue.KeygenHTMLAttributes
  label: Vue.LabelHTMLAttributes
  legend: Vue.HTMLAttributes
  li: Vue.LiHTMLAttributes
  link: Vue.LinkHTMLAttributes
  main: Vue.HTMLAttributes
  map: Vue.MapHTMLAttributes
  mark: Vue.HTMLAttributes
  menu: Vue.MenuHTMLAttributes
  meta: Vue.MetaHTMLAttributes
  meter: Vue.MeterHTMLAttributes
  nav: Vue.HTMLAttributes
  noindex: Vue.HTMLAttributes
  noscript: Vue.HTMLAttributes
  object: Vue.ObjectHTMLAttributes
  ol: Vue.OlHTMLAttributes
  optgroup: Vue.OptgroupHTMLAttributes
  option: Vue.OptionHTMLAttributes
  output: Vue.OutputHTMLAttributes
  p: Vue.HTMLAttributes
  param: Vue.ParamHTMLAttributes
  picture: Vue.HTMLAttributes
  pre: Vue.HTMLAttributes
  progress: Vue.ProgressHTMLAttributes
  q: Vue.QuoteHTMLAttributes
  rp: Vue.HTMLAttributes
  rt: Vue.HTMLAttributes
  ruby: Vue.HTMLAttributes
  s: Vue.HTMLAttributes
  samp: Vue.HTMLAttributes
  script: Vue.ScriptHTMLAttributes
  section: Vue.HTMLAttributes
  select: Vue.SelectHTMLAttributes
  small: Vue.HTMLAttributes
  source: Vue.SourceHTMLAttributes
  span: Vue.HTMLAttributes
  strong: Vue.HTMLAttributes
  style: Vue.StyleHTMLAttributes
  sub: Vue.HTMLAttributes
  summary: Vue.HTMLAttributes
  sup: Vue.HTMLAttributes
  table: Vue.TableHTMLAttributes
  template: Vue.HTMLAttributes
  tbody: Vue.HTMLAttributes
  td: Vue.TdHTMLAttributes
  textarea: Vue.TextareaHTMLAttributes
  tfoot: Vue.HTMLAttributes
  th: Vue.ThHTMLAttributes
  thead: Vue.HTMLAttributes
  time: Vue.TimeHTMLAttributes
  title: Vue.HTMLAttributes
  tr: Vue.HTMLAttributes
  track: Vue.TrackHTMLAttributes
  u: Vue.HTMLAttributes
  ul: Vue.HTMLAttributes
  var: Vue.HTMLAttributes
  video: Vue.VideoHTMLAttributes
  wbr: Vue.HTMLAttributes
  webview: Vue.WebViewHTMLAttributes

  // SVG
  svg: Vue.SVGAttributes

  animate: Vue.SVGAttributes
  animateMotion: Vue.SVGAttributes
  animateTransform: Vue.SVGAttributes
  circle: Vue.SVGAttributes
  clipPath: Vue.SVGAttributes
  defs: Vue.SVGAttributes
  desc: Vue.SVGAttributes
  ellipse: Vue.SVGAttributes
  feBlend: Vue.SVGAttributes
  feColorMatrix: Vue.SVGAttributes
  feComponentTransfer: Vue.SVGAttributes
  feComposite: Vue.SVGAttributes
  feConvolveMatrix: Vue.SVGAttributes
  feDiffuseLighting: Vue.SVGAttributes
  feDisplacementMap: Vue.SVGAttributes
  feDistantLight: Vue.SVGAttributes
  feDropShadow: Vue.SVGAttributes
  feFlood: Vue.SVGAttributes
  feFuncA: Vue.SVGAttributes
  feFuncB: Vue.SVGAttributes
  feFuncG: Vue.SVGAttributes
  feFuncR: Vue.SVGAttributes
  feGaussianBlur: Vue.SVGAttributes
  feImage: Vue.SVGAttributes
  feMerge: Vue.SVGAttributes
  feMergeNode: Vue.SVGAttributes
  feMorphology: Vue.SVGAttributes
  feOffset: Vue.SVGAttributes
  fePointLight: Vue.SVGAttributes
  feSpecularLighting: Vue.SVGAttributes
  feSpotLight: Vue.SVGAttributes
  feTile: Vue.SVGAttributes
  feTurbulence: Vue.SVGAttributes
  filter: Vue.SVGAttributes
  foreignObject: Vue.SVGAttributes
  g: Vue.SVGAttributes
  image: Vue.SVGAttributes
  line: Vue.SVGAttributes
  linearGradient: Vue.SVGAttributes
  marker: Vue.SVGAttributes
  mask: Vue.SVGAttributes
  metadata: Vue.SVGAttributes
  mpath: Vue.SVGAttributes
  path: Vue.SVGAttributes
  pattern: Vue.SVGAttributes
  polygon: Vue.SVGAttributes
  polyline: Vue.SVGAttributes
  radialGradient: Vue.SVGAttributes
  rect: Vue.SVGAttributes
  stop: Vue.SVGAttributes
  switch: Vue.SVGAttributes
  symbol: Vue.SVGAttributes
  text: Vue.SVGAttributes
  textPath: Vue.SVGAttributes
  tspan: Vue.SVGAttributes
  use: Vue.SVGAttributes
  view: Vue.SVGAttributes
}
