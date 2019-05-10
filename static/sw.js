importScripts('/nuxt-vue-presentation/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/nuxt-vue-presentation/_nuxt/00159a4f2cbe49de6d32.js",
    "revision": "0292595639b17d3e479b3f97fa90bce1"
  },
  {
    "url": "/nuxt-vue-presentation/_nuxt/07f63ad7a849a768557d.js",
    "revision": "15e013dce43a39fd3c11916e78b4ee16"
  },
  {
    "url": "/nuxt-vue-presentation/_nuxt/782ce9ffdc272b31c4c2.js",
    "revision": "376d67de29ecb5963d6744455050934a"
  },
  {
    "url": "/nuxt-vue-presentation/_nuxt/a65c257909ca7f1b0dc6.js",
    "revision": "9cc04bafaed730b2b0193fc60cc11685"
  },
  {
    "url": "/nuxt-vue-presentation/_nuxt/b3785e3790a4df3524e9.js",
    "revision": "7292e29fcabd31d691d339465207c84b"
  }
], {
  "cacheId": "nuxtStudy",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/nuxt-vue-presentation/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/nuxt-vue-presentation/.*'), workbox.strategies.networkFirst({}), 'GET')
