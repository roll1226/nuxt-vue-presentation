<template>
  <div class="slide4">
    <h2>
      HEWに使える気がする
    </h2>
    <p v-for="(p4, i) in ps" :key="i">・{{ p4.ptag }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ps: [
        {
          ptag: 'Vanilla.jsよりも実装が楽'
        },
        {
          ptag: 'Laravelと相性がいい'
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
