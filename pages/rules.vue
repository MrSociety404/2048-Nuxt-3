<template>
  <main class="rules">
    <h2 class="rules__title">Rules</h2>
    <p class="rules__rules">
      The object of the game is to slide tiles on a grid, to combine tiles of
      the same values ​​and thus create a tile with the number 2048. The player
      can however continue playing after this objective has been reached to
      achieve the best possible score.
    </p>
    <h2 class="rules__title">How To Play ?</h2>
    <p class="rules__rules">
      Use your arrow key 
    </p>
    <NuxtLink to="/" class="rules__start">Start a game</NuxtLink>
  </main>
</template>

<script setup>
</script>

<style lang="scss">
.rules {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  &__title {
    margin: 2rem 0;
    font-size: 2em;
    color: var(--primary);
    letter-spacing: 0.05em;
  }
  &__rules {
    font-size: 1.1em;
    text-align: justify;
    line-height: 30px;
    margin-bottom: 3em;
  }
  &__start {
    width: 90%;
    text-align: center;
    padding: 1rem 2rem;
    box-shadow: var(--morph);
    border-radius: 25px;
    color: var(--primary);
    font-size: 1.6em;
    font-weight: 500;
    transition: box-shadow .5s ease, transform .2s ease;
    &:hover {
      box-shadow: var(--morph-hover);
    }
    &:active {
      transform: translateY(1px);
    }
  }
}
</style>