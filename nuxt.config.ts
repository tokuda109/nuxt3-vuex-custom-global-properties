export default defineNuxtConfig({
  srcDir: 'src/',
  typescript: {
    strict: true,
    typeCheck: true,
  },
  vite: {
    devBundler: 'legacy',
  },
});
