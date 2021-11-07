<template>
  <div>
    <div id="live-player"></div>
    <button ref="buttonRef" @click="click">12cdcdcdcd3</button>
    <div class="waves">
      <i></i>
      <i></i>
      <i></i>
      <!-- <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i> -->
    </div>
  </div>
</template>

<script>
import FlvPlayer from 'xgplayer-flv'

export default {
  mounted() {
    this.$nextTick(() => {
      this.renderPlayer()
    })
  },
  methods: {
    renderPlayer() {
      this.livePlayer = new FlvPlayer({
        id: 'live-player',
        isLive: true,
        url: 'http://pull-f5.flive.douyincdn.com/stage/stream-109756050134270053_or4.flv',
        autoplay: true,
        autoplayMuted: true,
        videoInit: true,
        lang: 'en'
      })
      // this.livePlayer.muted = true
      // this.livePlayer.play()
    },
    click() {
      console.log(911)
      this.livePlayer.video.play()
    }
  }
}
</script>

<style lang="scss" scoped>
@-webkit-keyframes shake {
  0% {
    height: 5px;
    margin-top: 0;
  }
  50% {
    height: 100px;
    margin-top: -50px;
  }
  100% {
    height: 5px;
    margin-top: 0;
  }
}

@keyframes shake {
  0% {
    height: 5px;
    margin-top: 0;
  }
  50% {
    height: 100px;
    margin-top: -50px;
  }
  100% {
    height: 5px;
    margin-top: 0;
  }
}

.waves {
  position: relative;
  width: 260px;
  margin: 0 auto;
  padding: 60px 0;
}

.waves i {
  display: inline-block;
  position: absolute;
  height: 5px;
  width: 5px;
  background: skyblue;
}

.waves i:nth-last-child(1) {
  left: 10px;
  -webkit-animation: shake 1s 0.02857s infinite;
}

.waves i:nth-last-child(2) {
  left: 20px;
  -webkit-animation: shake 1s 0.05714s infinite;
}

.waves i:nth-last-child(3) {
  left: 30px;
  -webkit-animation: shake 1s 0.08571s infinite;
}

.waves i:nth-last-child(4) {
  left: 40px;
  -webkit-animation: shake 1s 0.11429s infinite;
}

.waves i:nth-last-child(5) {
  left: 50px;
  -webkit-animation: shake 1s 0.14286s infinite;
}

.waves i:nth-last-child(6) {
  left: 60px;
  -webkit-animation: shake 1s 0.17143s infinite;
}

.waves i:nth-last-child(7) {
  left: 70px;
  -webkit-animation: shake 1s 0.2s infinite;
}

.waves i:nth-last-child(8) {
  left: 80px;
  -webkit-animation: shake 1s 0.22857s infinite;
}

.waves i:nth-last-child(9) {
  left: 90px;
  -webkit-animation: shake 1s 0.25714s infinite;
}

.waves i:nth-last-child(10) {
  left: 100px;
  -webkit-animation: shake 1s 0.28571s infinite;
}

.waves i:nth-last-child(11) {
  left: 110px;
  -webkit-animation: shake 1s 0.31429s infinite;
}

.waves i:nth-last-child(12) {
  left: 120px;
  -webkit-animation: shake 1s 0.34286s infinite;
}

.waves i:nth-last-child(13) {
  left: 130px;
  -webkit-animation: shake 1s 0.37143s infinite;
}

.waves i:nth-last-child(14) {
  left: 140px;
  -webkit-animation: shake 1s 0.4s infinite;
}

.waves i:nth-last-child(15) {
  left: 150px;
  -webkit-animation: shake 1s 0.42857s infinite;
}

.waves i:nth-last-child(16) {
  left: 160px;
  -webkit-animation: shake 1s 0.45714s infinite;
}

.waves i:nth-last-child(17) {
  left: 170px;
  -webkit-animation: shake 1s 0.48571s infinite;
}

.waves i:nth-last-child(18) {
  left: 180px;
  -webkit-animation: shake 1s 0.51429s infinite;
}

.waves i:nth-last-child(19) {
  left: 190px;
  -webkit-animation: shake 1s 0.54286s infinite;
}

.waves i:nth-last-child(20) {
  left: 200px;
  -webkit-animation: shake 1s 0.57143s infinite;
}

.waves i:nth-last-child(21) {
  left: 210px;
  -webkit-animation: shake 1s 0.6s infinite;
}

.waves i:nth-last-child(22) {
  left: 220px;
  -webkit-animation: shake 1s 0.62857s infinite;
}

.waves i:nth-last-child(23) {
  left: 230px;
  -webkit-animation: shake 1s 0.65714s infinite;
}

.waves i:nth-last-child(24) {
  left: 240px;
  -webkit-animation: shake 1s 0.68571s infinite;
}

.waves i:nth-last-child(25) {
  left: 250px;
  -webkit-animation: shake 1s 0.71429s infinite;
}
</style>
