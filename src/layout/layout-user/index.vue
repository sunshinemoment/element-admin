<template>
  <div class="layout-user">
    <div class="layout-user__container">
      <div class="layout-user__head">
        <p class="layout-user__title">ElementUI Admin</p>
        <p class="layout-user__desc">A awsome web admin systerm</p>
      </div>
      <div class="layout-user__main">
        <router-view />
      </div>
      <div class="layout-user__foot">
        <ul class="layout-user__links">
          <li>
            <a href="javascript: viod(0)">帮助</a>
          </li>
          <li>
            <a href="javascript: viod(0)">隐私</a>
          </li>
          <li>
            <a href="javascript: viod(0)">条款</a>
          </li>
        </ul>
        <p class="layout-user__copyright">Copyright &copy; 2018 vueComponent</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout-user {
  text-align: center;
}
.layout-user__container {
  min-height: 100vh;
  padding: 110px 0 144px;
  background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);
}
.layout-user__title {
  font-size: 33px;
  color: rgba(0, 0, 0, 0.85);
  font-family: Avenir, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  font-weight: 600;
}
.layout-user__desc {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
  margin-top: 12px;
  margin-bottom: 40px;
}
.layout-user__foot {
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 0 16px;
  margin: 48px 0 24px;
  text-align: center;
  ul {
    padding: 0;
    li {
      display: inline-block;
      & + li {
        margin-left: 10px;
      }
    }
  }
}
.layout-user__links {
  margin-bottom: 8px;
  font-size: 14px;
  a {
    color: rgba(0, 0, 0, 0.45);
    transition: all 0.3s;
    &:not(:last-child) {
      margin-right: 40px;
    }
  }
}
.layout-user__copyright {
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}
</style>
