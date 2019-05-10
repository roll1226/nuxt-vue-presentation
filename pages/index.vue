<template>
  <!-- swiper -->
  <swiper id="swiperWrap" :options="swiperOption">
    <swiper-slide class="sride">
      <Slide1></Slide1>
    </swiper-slide>
    <swiper-slide class="sride">
      <Slide2></Slide2>
    </swiper-slide>
    <swiper-slide class="sride">
      <Slide3></Slide3>
    </swiper-slide>
    <swiper-slide class="sride">
      <Slide4></Slide4>
    </swiper-slide>
    <swiper-slide class="sride">
      <Slide5></Slide5>
    </swiper-slide>

    <div slot="pagination" class="swiper-pagination"></div>
    <div slot="button-prev" class="swiper-button-prev"></div>
    <div slot="button-next" class="swiper-button-next"></div>
  </swiper>
</template>

<script>
import Slide1 from '~/components/slides/Slide1'
import Slide2 from '~/components/slides/Slide2'
import Slide3 from '~/components/slides/Slide3'
import Slide4 from '~/components/slides/Slide4'
import Slide5 from '~/components/slides/Slide5'
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide,
    Slide1,
    Slide2,
    Slide3,
    Slide4,
    Slide5
  },
  data() {
    return {
      swiperOption: {
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        keyboard: {
          enabled: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}
</script>

<style>
#swiperWrap {
  width: 100%;
  height: 98.2vh;
}
.sride {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
h1 {
  font-size: 5vw;
}
h2 {
  font-size: 3.5vw;
}
</style>
