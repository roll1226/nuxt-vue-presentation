<template>
  <div>
    <Background></Background>
    <transition name="main">
      <nuxt />
    </transition>
  </div>
</template>

<script>
import Background from '~/components/Background'
export default {
  components: {
    Background
  }
}
</script>

<style scoped>
.main-enter-active,
.main-leave-active {
  transform: translate(0px, 0px);
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
}

.main-enter,
.main-leave-to {
  transform: translateX(100vh) translateX(0px);
}
</style>
