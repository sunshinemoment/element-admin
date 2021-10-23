<template>
  <div class="page-media-device">
    <el-button type="primary" @click="openCamera">打开摄像头</el-button>
    <br />
    <br />
    <video style="width: 300px; height: 180px" controls ref="cameraRef"></video>
    <el-divider></el-divider>
    <el-button type="primary" @click="openMicrophone">打开麦克风</el-button>
    <br />
    <br />
    <audio controls ref="microphoneRef"></audio>
    <el-divider></el-divider>
    <el-button type="primary" @click="openCameraAndMicrophone">
      打开摄像头和麦克风
    </el-button>
    <br />
    <br />
    <video
      style="width: 300px; height: 180px"
      controls
      ref="cameraAndMicrophoneRef"
    ></video>
    <el-divider></el-divider>
    <el-button type="primary" @click="enumerateDevices">获取本地设备</el-button>
    <br />
    <br />
    <el-tree :data="data" :props="defaultProps"></el-tree>
  </div>
</template>

<script>
export default {
  data() {
    return {
      audioEquipments: [],
      videoEquipment: [],
      data: [
        {
          label: '一级 1',
          children: [
            {
              label: '二级 1-1',
              children: [
                {
                  label: '三级 1-1-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 2',
          children: [
            {
              label: '二级 2-1',
              children: [
                {
                  label: '三级 2-1-1'
                }
              ]
            },
            {
              label: '二级 2-2',
              children: [
                {
                  label: '三级 2-2-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 3',
          children: [
            {
              label: '二级 3-1',
              children: [
                {
                  label: '三级 3-1-1'
                }
              ]
            },
            {
              label: '二级 3-2',
              children: [
                {
                  label: '三级 3-2-1'
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    async openCamera() {
      const mediaDevices = navigator.mediaDevices
      if (!mediaDevices) {
        console.log('mediaDevices is not support')
        return
      }
      try {
        const stream = await mediaDevices.getUserMedia({
          video: true
        })
        this.$refs.cameraRef.srcObject = stream
        console.log(stream)
      } catch (error) {
        console.log(error)
      }
    },
    async openMicrophone() {
      const mediaDevices = navigator.mediaDevices
      if (!mediaDevices) {
        console.log('mediaDevices is not support')
        return
      }
      try {
        const stream = await mediaDevices.getUserMedia({
          audio: true
        })
        this.$refs.microphoneRef.srcObject = stream
        console.log(stream)
      } catch (error) {
        console.log(error)
      }
    },
    async openCameraAndMicrophone() {
      const mediaDevices = navigator.mediaDevices
      if (!mediaDevices) {
        console.log('mediaDevices is not support')
        return
      }
      try {
        const stream = await mediaDevices.getUserMedia({
          video: true,
          audio: true
        })
        this.$refs.cameraAndMicrophoneRef.srcObject = stream
        console.log(stream)
      } catch (error) {
        console.log(error)
      }
    },
    async enumerateDevices() {
      const mediaDevices = navigator.mediaDevices
      if (!mediaDevices) {
        console.log('mediaDevices is not support')
        return
      }
      try {
        const devices = await mediaDevices.enumerateDevices()
        console.log(devices)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
