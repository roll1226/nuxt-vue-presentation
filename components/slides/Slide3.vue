<template>
  <div class="slide3">
    <h2>
      学ぶメリット
    </h2>
    <p v-for="p in ps" :key="p">・{{ p.ptag }}</p>
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
