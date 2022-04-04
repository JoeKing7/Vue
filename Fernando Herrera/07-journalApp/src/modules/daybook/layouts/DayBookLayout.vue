<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    NavBar: defineAsyncComponent(() => import("../components/Navbar.vue")),
    EntryList: defineAsyncComponent(() =>
      import("../components/EntryList.vue")
    ),
    EntryContent: defineAsyncComponent(() => import("../components/EntryContent.vue")),
  },
};
</script>

    
<template>
  <div class="content">
    <nav-bar></nav-bar>
    <entry-content></entry-content>
    <entry-list></entry-list>
  </div>
  <!-- <div class="d-flex">
    <div class="col-4">
      <entry-list></entry-list>
    </div>
    <div class="col">
      <router-view></router-view>
    </div>
  </div> -->
</template>

<style scoped>
.content {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #f2f7ff;
}
</style>
