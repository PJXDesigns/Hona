// Google Analytics 4 for hona.fitness (HONA-292).
//
// One small file, loaded by index.html and by each static legal page, so every
// page gets the same tag. It sends:
//   page_view        on every page load (gtag's default)
//   beta_click       on links to the beta signup (#beta) or TestFlight
//   app_store_click  on App Store links, once there are any
//   social_click     on social links, with the network as `network`
// UTM parameters on the landing URL are read by GA4 itself.
//
// Event parameters carry only the link's destination and label. Never add an
// email, a name or any other personal detail here.
//
// On localhost nothing is sent, unless the URL has ?ga_debug, which also turns
// on GA4 DebugView for that visit.
;(function () {
  var MEASUREMENT_ID = 'G-VCXNC95KPY'

  var host = location.hostname
  var local = host === 'localhost' || host === '127.0.0.1' || host === '[::1]' || host === ''
  var debug = /[?&]ga_debug\b/.test(location.search)
  if (local && !debug) return

  window.dataLayer = window.dataLayer || []
  function gtag() { window.dataLayer.push(arguments) }
  window.gtag = gtag

  var s = document.createElement('script')
  s.async = true
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + MEASUREMENT_ID
  document.head.appendChild(s)

  gtag('js', new Date())
  gtag('config', MEASUREMENT_ID, debug ? { debug_mode: true } : {})

  // Social networks by host. Add a row when a new profile link goes on the site.
  var SOCIAL = [
    ['instagram.com', 'instagram'],
    ['strava.com', 'strava'],
    ['x.com', 'x'],
    ['twitter.com', 'x'],
    ['threads.net', 'threads'],
    ['threads.com', 'threads'],
    ['tiktok.com', 'tiktok'],
    ['youtube.com', 'youtube'],
    ['youtu.be', 'youtube'],
    ['facebook.com', 'facebook'],
    ['linkedin.com', 'linkedin'],
    ['bsky.app', 'bluesky'],
    ['reddit.com', 'reddit']
  ]

  function hostMatches(h, domain) {
    return h === domain || h.slice(-(domain.length + 1)) === '.' + domain
  }

  // Which event, if any, a link should send.
  function classify(a) {
    var raw = a.getAttribute('href') || ''
    var url
    try { url = new URL(raw, location.href) } catch (e) { return null }
    var h = url.hostname.replace(/^www\./, '')

    if (url.protocol === 'mailto:' || url.protocol === 'tel:') return null
    if (hostMatches(h, 'testflight.apple.com')) return { name: 'beta_click', url: url }
    if (url.origin === location.origin && url.hash === '#beta') return { name: 'beta_click', url: url }
    if (hostMatches(h, 'apps.apple.com') || hostMatches(h, 'itunes.apple.com')) return { name: 'app_store_click', url: url }
    for (var i = 0; i < SOCIAL.length; i++) {
      if (hostMatches(h, SOCIAL[i][0])) return { name: 'social_click', url: url, network: SOCIAL[i][1] }
    }
    return null
  }

  // One listener for the whole document, so links React renders later are
  // covered too. Capture phase, so it runs before any handler that navigates.
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href]') : null
    if (!a) return
    var hit = classify(a)
    if (!hit) return

    var params = {
      link_url: hit.url.origin === location.origin ? hit.url.pathname + hit.url.hash : hit.url.href,
      link_text: (a.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 100),
      link_location: a.closest('header, nav') ? 'nav' : a.closest('footer') ? 'footer' : (a.closest('section[id]') || {}).id || 'page'
    }
    if (hit.network) params.network = hit.network
    // gtag sends hits with sendBeacon or a keepalive fetch, so a click that
    // leaves the site still gets through.

    gtag('event', hit.name, params)
  }, true)
})()
