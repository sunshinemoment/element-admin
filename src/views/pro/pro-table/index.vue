<template>
  <div class="page-pro-table">
    <pro-table :columns="columns" :fetch="fetch"></pro-table>
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
    fetch(req) {
      return mock(req)
    }
  }
}
</script>
