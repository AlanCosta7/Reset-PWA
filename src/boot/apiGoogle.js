let promise = null

export default ({ app, router, Vue }) => {
  let
    id = 'google-cdn',
    url = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD7t4w0YqoHZNWNTSiM7bqpK6x_kw_2vFo&callback=initMap&libraries=&v=beta&map_ids=1e3f5f18889109ae'

  Vue.prototype.$google = function () {
    if (!promise) {
      promise = new Promise((resolve, reject) => {
        if (document.getElementById(id)) {
          return
        }
        let script = document.createElement('script')
        script.src = url
        script.async = true
        script.id = id
        script.onload = () => {
          resolve()
        }
        script.onerror = (err) => {
          reject(err)
        }
        document.body.appendChild(script)
      })
    }
    return promise
  }
}
