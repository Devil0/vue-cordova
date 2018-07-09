<template>
  <div class="app">
    <h1>Apache Cordova</h1>
    <div id="deviceready" class="blink">
      <p class="event listening">Connecting to Device</p>
      <p class="event received">Device is Ready</p>
    </div>
    <button @click="handleCamera()">打开相机</button>
    <button @click="showNavigator()">查看navigator.camera</button>
    <img id="myImage" src="" alt="获取相片">
  </div>
</template>

<script>
export default {
  name: 'Cordova',
  methods: {
    showNavigator() {
        alert(JSON.stringify(window.navigator.camera))
    },
    /**
     * Warning: Using DATA_URL is not recommended! The DATA_URL destination
     * type is very memory intensive, even with a low quality setting. Using it
     * can result in out of memory errors and application crashes. Use FILE_URI
     * or NATIVE_URI instead.
     */

    onSuccess(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    },

    onFail(message) {
        alert('Failed because: ' + message);
    },

    handleCamera() {
        navigator.camera.getPicture(this.onSuccess, this.onFail, {
            quality: 25,
            destinationType: window.Camera.DestinationType.DATA_URL
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Portrait layout (default) */
.app {
  position: absolute; /* position in the center of the screen */
  left: 50%;
  height: 50px; /* text area height */
  width: 225px; /* text area width */
  text-align: center;
  padding: 120px 0px 0px 0px; /* image height is 200px (bottom 20px are overlapped with text) */
  margin: -115px 0px 0px -112px; /* offset vertical: half of image height and text area height */
  /* offset horizontal: half of text area width */
}

/* Landscape layout (with min-width) */
@media screen and (min-aspect-ratio: 1/1) and (min-width: 400px) {
  .app {
    background-position: left center;
    padding: 75px 0px 75px 170px; /* padding-top + padding-bottom + text area = image height */
    margin: -90px 0px 0px -198px; /* offset vertical: half of image height */
    /* offset horizontal: half of image width and text area width */
  }
}

h1 {
  font-size: 24px;
  font-weight: normal;
  margin: 0px;
  overflow: visible;
  padding: 0px;
  text-align: center;
}

.event {
  border-radius: 4px;
  -webkit-border-radius: 4px;
  color: #ffffff;
  font-size: 12px;
  margin: 0px 30px;
  padding: 2px 0px;
}

.event.listening {
  background-color: #333333;
  display: block;
}

.event.received {
  background-color: #4b946a;
  display: none;
}

@keyframes fade {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

@-webkit-keyframes fade {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

.blink {
  animation: fade 3000ms infinite;
  -webkit-animation: fade 3000ms infinite;
}
img {
  max-width: 100%;
}
</style>
