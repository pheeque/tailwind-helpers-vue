import { ref, onMounted, onUnmounted } from 'vue';

export function useBreakpoint(label) {
  const sizes = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  };
  const matches = ref(false);
  const mediaQuery = window.matchMedia(`(min-width: ${sizes[label]}px)`);

  function change() {
    matches.value = mediaQuery.matches;
  }

  onMounted(() => {
    change();
    mediaQuery.addEventListener('change', change);
  });

  onUnmounted(() => {
    mediaQuery.removeEventListener('change', change);
  });

  return matches;
}
