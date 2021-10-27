<template>
  <div class="page-list-page">
    <list-page
      label-width="80px"
      :model="model"
      :fields="fields"
      @submit="submit"
      :columns="columns"
      :fetch="fetch"
      submitter
    ></list-page>
  </div>
</template>

<script>
const mock = function (req) {
  return new Promise((reslove, reject) => {
    var c = 1 + 2
    // var c = Math.random() > 0.5
    if (c) {
      setTimeout(() => {
        reslove({
          list: [...new Array(10)].map((_, index) => ({
            date: new Date(),
            name: index + '-name-' + req.currentPage + '-' + req.pageSize,
            addr: index + '-addr'
          })),
          total: 100
        })
      }, 1000)
      return
    }
    reject('error')
  })
}

export default {
  data() {
    return {
      restaurants: [],
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
              label: '区域一',
              value: 'shanghai'
            },
            {
              label: '区域二',
              value: 'beijing'
            }
          ]
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
            label: '即时配送',
            prop: 'type'
          },
          children: [
            {
              label: '美食/餐厅线上活动',
              text: '美食/餐厅线上活动'
            },
            {
              label: '地推活动'
            },
            {
              label: '线下主题活动'
            },
            {
              label: '单纯品牌曝光'
            }
          ]
        }
      ],
      columns: [
        {
          label: '日期',
          prop: 'date'
        },
        {
          label: '姓名',
          prop: 'name'
        },
        {
          label: '地址',
          prop: 'addr'
        }
      ]
    }
  },
  methods: {
    click() {
      console.log(this.model, this.formRef)
    },
    submit() {
      console.log(this.model)
    },
    fetch(req) {
      return mock(req)
    }
  }
}
</script>
