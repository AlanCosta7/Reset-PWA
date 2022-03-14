<template>
  <q-layout class="bg-grey-1">
    <div id="map" class="bg-grey-3">
    </div>

    <q-card v-if="!geoLocation" class="flex no-shadow flex-center">
      <q-img
        src="assets/destination.svg"
        style="max-width: 220px; heigth: 500px"
        spinner-color="primary"
        spinner-size="82px"
      />
      <q-card-section>
        <div class="text-h6">Ative sua localização</div>
      </q-card-section>
      <q-card-actions>
        <q-btn color="primary" flat label="cancelar" @click="voltarIndex" />
      </q-card-actions>
    </q-card>
  </q-layout>
</template>

<script>
import Vuex from "vuex";
import { Loading } from 'quasar'
import { externalApi } from '../../boot/apiGoogle.js'

export default {
  data() {
    return {
      editCEP: '',
      map: null,
    }
  },
  watch: {
    geoLocation(val) {

      setTimeout(() => {
        this.initMap()
      }, 1000);
    }
  },
  computed: {
    ...Vuex.mapGetters({
      geoLocation: "geoLocation",
    })
  },
  mounted() {
    this.$google()
    var geoLocation = this.geoLocation

    if(geoLocation) {
      setTimeout(() => {
        this.initMap()
      }, 2000);
    }
  },
  methods: {
    initMap() {
      var coordenadaUser
      var map = this.map;
      var position = this.geoLocation

      var locations = []
     // console.log(locations)

      let his = this

      map = new window.google.maps.Map(document.getElementById("map"), {
        center: position,
        zoom: 14,
        mapId: "1e3f5f18889109ae",
        mapTypeId: "roadmap",
        zoomControl: false,
        scaleControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false
      });
     // console.log('initMap', position)
     // const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

      // const markers = locations.map((location, i) => {
      //   return new google.maps.Marker({
      //     position: location,
      //     label: labels[i % labels.length],
      //   });
      // });

      // new MarkerClusterer(map, markers, {
      //   gridSize: 20,
      //   imagePath:
      //     "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
      // });

      var marker = new window.google.maps.Marker({
        position: position,
        draggable: true,
        map: map,
      })

      marker.addListener('dragend', function(e) {
          coordenadaUser = {
            lat: null,
            lng: null
          }
          var latLng = e.latLng;
          coordenadaUser.lat = latLng.lat();
          coordenadaUser.lng = latLng.lng();
          his.$store.commit('setGeoLocation', coordenadaUser)

      });

      // const cityCircle = new google.maps.Circle({
      //   strokeColor: "#000000",
      //   strokeOpacity: 1,
      //   strokeWeight: 0,
      //   fillColor: "#000000",
      //   fillOpacity: 0.1,
      //   map: map,
      //   center: position,
      //   radius: 1000,
      // });

    },
    voltarIndex() {

      var nicknameRouter = this.nicknameRouter
      this.$router.push({ name: 'home', params: { nickname: nicknameRouter } })
    },
  }
}
</script>

<style >
  #map {
    position: fixed;
    background-attachment: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 0;
  }
</style>
