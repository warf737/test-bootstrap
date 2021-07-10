<script>
import Navbar from '@/views/Navbar';
import Workspace from '@/views/Workspace';
import { DEFAULT_MENU_ITEM } from './constants';

export default {
  name: 'App',
  DEFAULT_MENU_ITEM: DEFAULT_MENU_ITEM,
  components: {
    Navbar,
    Workspace
  },
  data() {
    return {
      activeTabIndex: null,
    }
  },
  created() {
    this.activeTabIndex = this.$route.meta.tab || DEFAULT_MENU_ITEM;
  },
  computed: {
    component() {
      return this.$route.meta;
    }
  },
  methods: {
    handleChangeTab(item) {
      this.activeTabIndex = item.id;
      this.$router.push({ path: `/${item.name}` })
    },
  }
}
</script>

<template>
  <div id="app" class="container col-md-8">
    <navbar
      :activeTabIndex="activeTabIndex"
      @change-tab="handleChangeTab"
    />
    <workspace
      :component="component"
    />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
