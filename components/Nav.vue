<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <NuxtLink to="/rules" class="nav__link" aria-label="rules & info">
          <svg
            width="38"
            height="38"
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon"
            viewBox="0 0 512 512"
          >
            <title>Help</title>
            <path
              d="M160 164s1.44-33 33.54-59.46C212.6 88.83 235.49 84.28 256 84c18.73-.23 35.47 2.94 45.48 7.82C318.59 100.2 352 120.6 352 164c0 45.67-29.18 66.37-62.35 89.18S248 298.36 248 324"
              fill="none"
              stroke="#24b685"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="40"
            />
            <circle cx="248" cy="399.99" r="32" fill="#24b685" />
          </svg>
        </NuxtLink>
      </li>
      <li class="nav__item">
        <button class="nav__link" aria-label="restart" @click="handleReset">
          <svg
            width="38"
            height="38"
            viewBox="0 0 512 512"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M192 146C192 146 167.64 134 256 134C287.645 134 318.579 143.384 344.891 160.965C371.203 178.546 391.711 203.534 403.821 232.771C415.931 262.007 419.099 294.177 412.926 325.214C406.752 356.251 391.513 384.761 369.137 407.137C346.761 429.513 318.251 444.752 287.214 450.926C256.177 457.099 224.007 453.931 194.771 441.821C165.534 429.711 140.546 409.203 122.965 382.891C105.384 356.579 96 325.645 96 294"
              stroke="#24b685"
              stroke-width="32"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
            <path
              d="M256 58L176 138L256 218"
              stroke="#24b685"
              stroke-width="32"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const emit = defineEmits(['resetBtn'])

const handleReset = () => {
  emit('resetBtn')
}
</script>

<style lang="scss">
.nav {
  &__list {
    display: flex;
    justify-content: space-between;
    padding: 1em;
    max-width: var(--300);
    margin: 0 auto;
  }
  &__item {
    width: 65px;
    height: 65px;
    box-shadow: var(--morph);
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: box-shadow 0.5s ease, transform 0.2s ease;
    &:hover {
      box-shadow: var(--morph-hover);
    }
    &:active {
      transform: translateY(1px);
    }
  }
  &__link {
    cursor: pointer;
  }
}
</style>