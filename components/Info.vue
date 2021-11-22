<template>
  <section class="info">
    <h2 class="info__desc">{{ title }}</h2>
    <h3 class="info__title">{{ score }}</h3>
  </section>
</template>

<script setup lang="ts">
defineProps({
  score: Number,
  title: String,
});
</script>

<style lang="scss">
.info {
  text-align: center;
  margin: 2rem auto 1rem auto;
  font-size: 1.8rem;
  &__desc {
    margin-bottom: .5rem;
  }
  &__title {
    color: var(--primary);
    font-weight: 500;
    font-size: 1.2em;
  }
}
</style>