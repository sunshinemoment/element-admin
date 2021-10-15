<template>
  <div class="page-pro-table">
    <pro-table :columns="columns" :fetch="fetch"></pro-table>
  </div>
</template>

<script>
const mock = function (req) {
  return new Promise((reslove, reject) => {
    // var c = 1 + 2
    var c = Math.random() > 0.5
    if (c) {
      setTimeout(() => {
        reslove({
          list: [...new Array(10)].map((_, index) => ({
            a: index + 'a-' + req.currentPage + '-' + req.pageSize,
            b: index + 'b'
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
          label: 'aaa',
          prop: 'a'
        },
        {
          label: 'bbb',
          prop: 'b'
        }
      ],
      data: [
        {
          a: '1',
          b: '2'
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
