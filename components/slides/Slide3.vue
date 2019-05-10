<template>
  <div class="slide3">
    <h2>
      学ぶメリット
    </h2>
    <p v-for="(p3, i) in ps" :key="i">・{{ p3.ptag }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ps: [
        {
          ptag: '学習効率がいい'
        },
        {
          ptag: '多くのライブラリがある'
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
