<template>
  <header class="header">
    <h1 class="header__title">2048</h1>
    <p class="header__score">
      <span class="header__score-title">Best</span>
      <span class="header__score-score">{{best}}</span>
    </p>
  </header>
</template>

<script setup>
  defineProps({
    best: Number
  })
</script>

<style lang="scss">
.header {
  max-width: var(--300);
  margin: 2em auto;
  box-shadow: var(--morph);
  border-radius: 25px;
  padding: 1.3rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  &__title {
    font-size: 2em;
  }
  &__score {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.2rem;
    &-title {
      letter-spacing: .05em;
    }
    &-score {
      color: var(--primary);
    }
  }
}
</style>