<template>
  <div class="slide2">
    <h2>
      何が出来るの？
    </h2>
    <p v-for="(p2, i) in ps" :key="i">・{{ p2.ptag }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ps: [
        {
          ptag: 'PWA（Progressive Web Apps）'
        },
        {
          ptag: 'SPA（Single Page Application）'
        },
        {
          ptag: 'SSR（Server Side Rendering）'
        }
      ]
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2.5vw;
  text-align: left;
}
</style>
