# tailwind-helpers-vue

Helper Vue.js functions for TailwindCSS

## Installation

`npm install tailwind-helpers-vue`

## Functions

### useBreakpoint

Determine the active device breakpoint using Tailwind labels.

```js
import { useBreakpoint } from 'tailwind-helpers-vue';

const menuIsOpen = ref(true);

const isDesktop = useBreakpoint('sm'); // md, lg, xl, 2xl

watch(
  isDesktop,
  () => {
    menuIsOpen.value = isDesktop.value;
  },
  { immediate: true }
);

```
