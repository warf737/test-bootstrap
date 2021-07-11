<script>
import { MENU_ITEMS } from '../constants';

export default {
  name: 'Navbar',
  MENU_ITEMS: MENU_ITEMS,
  props: {
    activeTabIndex: {
      type: Number,
      default: 0,
    },
  },
  data () {
    return {};
  },
  methods: {
    handleClick(item) {
      this.$emit('change-tab', item);
    }
  },
};
</script>

<template>
  <nav class="mt-4">
    <b-nav pills>
      <template v-for="(item, index, id) in $options.MENU_ITEMS">
        <b-nav-item :key="id"
                    :active="activeTabIndex === index"
                    @click="handleClick(item)"
        >
            {{ item.title }}
        </b-nav-item>
      </template>
    </b-nav>
  </nav>
</template>

<style lang="scss" scoped>
</style>
