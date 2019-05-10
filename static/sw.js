importScripts('/nuxt-vue-presentation/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/nuxt-vue-presentation/_nuxt/07f63ad7a849a768557d.js",
    "revision": "15e013dce43a39fd3c11916e78b4ee16"
  },
  {
    "url": "/nuxt-vue-presentation/_nuxt/782ce9ffdc272b31c4c2.js",
    "revision": "376d67de29ecb5963d6744455050934a"
  },
  {
    "url": "/nuxt-vue-presentation/_nuxt/b3785e3790a4df3524e9.js",
    "revision": "7292e29fcabd31d691d339465207c84b"
  },
  {
    "url": "/nuxt-vue-presentation/_nuxt/be2b95ef307d1132c175.js",
    "revision": "1b49b3b1ddb884c6916f699cc61b49af"
  },
  {
    "url": "/nuxt-vue-presentation/_nuxt/bebe8aacb406bf857a2b.js",
    "revision": "53b95f072d12c3d4b12574da99bcd22b"
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
