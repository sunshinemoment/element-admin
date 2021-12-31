<template>
  <div class="page-table-list">
    <list-page
      inline
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
          list: [...new Array(10)].map((_, i) => {
            const index = req.pageSize * (req.currentPage - 1) + (i + 1)
            return {
              index,
              date: new Date(),
              name: index + '-规则名称',
              desc: '这是一段描述'
            }
          }),
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
        desc: ''
      },
      fields: [
        {
          type: 'input',
          formItemProps: {
            label: '规则名称',
            prop: 'name'
          }
        },
        {
          type: 'input',
          formItemProps: {
            label: '描述',
            prop: 'desc'
          }
        }
      ],
      columns: [
        {
          label: '序号',
          prop: 'index'
        },
        {
          label: '规则名称',
          prop: 'name'
        },
        {
          label: '描述',
          prop: 'desc'
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
