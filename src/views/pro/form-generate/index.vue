<template>
  <div class="page-form-generate">
    <!-- <div class="page-form-generate__head">page-form-generate__head</div> -->
    <div class="page-form-generate__main">
      <div class="page-form-generate__block page-form-generate__editor-tools">
        <div class="page-form-generate__block-inner">
          <editor-tools></editor-tools>
        </div>
      </div>
      <div class="page-form-generate__block page-form-generate__editor-preview">
        <div class="page-form-generate__block-inner">
          <editor-preview></editor-preview>
        </div>
      </div>
      <div class="page-form-generate__block page-form-generate__editor-props">
        <div class="page-form-generate__block-inner">
          <editor-props></editor-props>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EditorTools from './_editor-tools'
import EditorPreview from './_editor-preview'
import EditorProps from './_editor-props'

export default {
  components: {
    EditorTools,
    EditorPreview,
    EditorProps
  }
}
</script>

<style lang="scss" scoped>
.page-form-generate {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.page-form-generate__main {
  display: flex;
  flex: 1;
}
.page-form-generate__block {
  position: relative;
}
.page-form-generate__block-inner {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
}
.page-form-generate__editor-tools {
  width: 210px;
  border-right: 1px solid rgba(29, 35, 41, 0.1);
}
.page-form-generate__editor-preview {
  flex: 1;
}
.page-form-generate__editor-props {
  width: 400px;
  border-left: 1px solid rgba(29, 35, 41, 0.1);
}
</style>
