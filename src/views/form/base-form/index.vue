<template>
  <div class="page-base-form">
    <pro-form
      label-width="80px"
      :model="model"
      :fields="fields"
      submitter
      @submit="submit"
    ></pro-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      fields: [
        {
          type: 'input',
          formItemProps: {
            label: '活动名称',
            prop: 'name'
          }
        },
        {
          type: 'select',
          formItemProps: {
            label: '活动区域',
            prop: 'region'
          },
          children: [
            {
              value: 'shanghai',
              label: '区域一'
            },
            {
              value: 'beijing',
              label: '区域二'
            }
          ],
          attributes: {
            style: 'width: 100%'
          }
        },
        {
          formItemProps: {
            label: '活动时间'
          },
          render(h, field, model) {
            return (
              <el-row>
                <el-col span={11}>
                  <el-form-item prop="date1">
                    <el-date-picker
                      type="date"
                      placeholder="选择日期"
                      v-model={model.date1}
                      style="width: 100%;"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col
                  style="display: flex; justify-content: center; align-items: center"
                  span={2}
                >
                  -
                </el-col>
                <el-col span={11}>
                  <el-form-item prop="date2">
                    <el-time-picker
                      placeholder="选择时间"
                      v-model={model.date2}
                      style="width: 100%;"
                    ></el-time-picker>
                  </el-form-item>
                </el-col>
              </el-row>
            )
          }
        },
        {
          type: 'switch',
          formItemProps: {
            label: '即时配送',
            prop: 'delivery'
          }
        },
        {
          type: 'checkbox-group',
          formItemProps: {
            label: '活动性质',
            prop: 'type'
          },
          children: [
            {
              label: '1',
              text: '美食/餐厅线上活动'
            },
            {
              label: '2',
              text: '地推活动'
            },
            {
              label: '3',
              text: '线下主题活动'
            },
            {
              label: '4',
              text: '单纯品牌曝光'
            }
          ]
        },
        {
          type: 'radio-group',
          formItemProps: {
            label: '特殊资源',
            prop: 'resource'
          },
          children: [
            {
              label: '1',
              text: '线上品牌商赞助'
            },
            {
              label: '2',
              text: '线下场地免费'
            }
          ]
        },
        {
          type: 'textarea',
          formItemProps: {
            label: '活动形式',
            prop: 'desc'
          }
        }
      ]
    }
  },
  methods: {
    submit(data) {
      console.log(data)
    }
  }
}
</script>

<style lang="scss" scoped>
.page-base-form {
  .pro-form {
    width: 460px;
  }
}
</style>
