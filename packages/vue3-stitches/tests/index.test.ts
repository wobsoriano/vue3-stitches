import { beforeEach, describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent, h } from 'vue'
import { createStitches } from '../src'

let { styled } = createStitches({})

beforeEach(() => {
  const newStyled = createStitches({})
  styled = newStyled.styled
})

describe('createStitches Vue', () => {
  test('basic component', async() => {
    const Heading = styled('h1', {
      color: 'red',
    })

    // @ts-expect-error: Styled Component types incompatible
    const wrapper = mount(Heading)

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('component with variant', () => {
    const Button = styled('button', {
      backgroundColor: 'gray',
      variants: {
        variant: {
          red: { backgroundColor: 'red' },
          blue: { backgroundColor: 'blue' },
        },
      },
    })

    const App = defineComponent({
      setup() {
        return () => h('div', [
          h(Button, () => 'A button!'),
          h(Button, {
            variant: 'red',
          }, () => 'A button!'),
          h(Button, {
            variant: 'blue',
          }, () => 'A button!'),
        ])
      },
    })

    const wrapper = mount(App)

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('css prop', () => {
    const Button = styled('button', {
      backgroundColor: 'gray',
    })

    const App = defineComponent({
      setup() {
        return () => h(Button, {
          css: {
            color: 'red',
          },
        }, () => 'A button!')
      },
    })

    const wrapper = mount(App)

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('compound variant', () => {
    const Button = styled('button', {
      backgroundColor: 'gray',
      variants: {
        variant: {
          red: {
            backgroundColor: 'red',
          },
        },
        size: {
          1: {
            height: 30,
          },
          2: {
            height: 60,
          },
        },
      },
      compoundVariants: [
        {
          variant: 'red',
          size: 1,
        },
        {
          backgroundColor: 'compoundColor',
        },
      ],
    })

    const App = defineComponent({
      setup() {
        return () => h('div', [
          h(Button, {
            variant: 'red',
            size: 2,
          }, () => 'not compound'),
          h(Button, {
            variant: 'red',
            size: 1,
          }, () => 'compound'),
        ])
      },
    })

    const wrapper = mount(App)

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('breakpoints in variants', () => {
    const { styled: _styled } = createStitches({
      media: {
        bp1: '(min-width: 400px)',
        bp2: '(min-width: 800px)',
      },
    })

    const Button = _styled('button', {
      'color': 'red',
      '@bp1': {
        height: '10px',
      },
      '@bp2': {
        height: '20px',
      },
      'variants': {
        size: {
          big: {
            '@bp1': {
              height: '100px',
            },
          },
        },
      },
    })

    const App = defineComponent({
      setup() {
        return () => h(Button, () => 'no variant')
      },
    })

    const wrapper = mount(App)

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('breakpoints in variants and when variant is passed to the component', () => {
    const { styled: _styled } = createStitches({
      media: {
        bp1: '(min-width: 400px)',
        bp2: '(min-width: 800px)',
      },
    })

    const Button = _styled('button', {
      'color': 'red',
      '@bp1': {
        height: '10px',
      },
      '@bp2': {
        height: '20px',
      },
      'variants': {
        size: {
          small: {
            '@bp1': {
              height: '100px',
            },
            '@bp2': {
              height: '200px',
            },
          },
          big: {
            '@bp1': {
              height: '1000px',
            },
            '@bp2': {
              height: '2000px',
            },
          },
        },
      },
    })

    const App = defineComponent({
      setup() {
        return () => h(Button, {
          size: 'big',
        }, () => 'with variant')
      },
    })

    const wrapper = mount(App)

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('breakpoints in variants and when a responsive variant is passed to the component', () => {
    const { styled: _styled } = createStitches({
      media: {
        bp1: '(min-width: 400px)',
        bp2: '(min-width: 800px)',
      },
    })

    const Button = _styled('button', {
      'color': 'red',
      '@bp1': {
        height: '10px',
      },
      '@bp2': {
        height: '20px',
      },
      'variants': {
        size: {
          small: {
            '@bp1': {
              height: '100px',
            },
            '@bp2': {
              height: '200px',
            },
          },
          big: {
            '@bp1': {
              height: '1000px',
            },
            '@bp2': {
              height: '2000px',
            },
          },
        },
      },
    })

    const App = defineComponent({
      setup() {
        return () => h(Button, {
          size: {
            '@bp1': 'small',
          },
        }, () => 'with responsive variant')
      },
    })

    const wrapper = mount(App)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
