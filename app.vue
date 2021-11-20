<template>
  <router-view />
</template>

<script setup>
useMeta({
  meta: [
    { name: "description", content: "Nuxt3 2048 Game. Made by MrSociety404" },
    { name: "theme-color", content: "#001E26"}
  ],
  title: "2048",
});
</script>

<style lang="scss">
</style>