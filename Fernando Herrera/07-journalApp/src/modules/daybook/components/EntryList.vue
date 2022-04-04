<template>
  <div class="right-sidebar">
    <div class="entry-list-container">
      <div class="px-2 pt-2">
        <input type="text" class="form-control" placeholder="Buscar entrada" />
      </div>
      <div class="entry-scrollarea">
        <entry v-for="item in 20" key="item"></entry>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    Entry: defineAsyncComponent(() => import("./Entry.vue")),
  },
};
</script>

<style lang="scss" scoped>
.right-sidebar {
  position: absolute;
  width: 27%;
  height: 100%;
  /* height: 990px; */
  left: 73%;
  top: 0px;
  background: #f2f7ff;
}

.entry-list-container {
  border-right: 1px solid #2c3e50;
  height: calc(100vh - 56px);
}

.entry-scrollarea {
  height: calc(100vh - 110px);
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
