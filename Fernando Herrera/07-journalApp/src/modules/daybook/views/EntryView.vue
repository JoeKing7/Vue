<template>
  <div class="entry-title d-flex justify-content-bewteen p-2">
    <span class="text-success fs-3 fw-bold">3</span>
    <span class="mx-1 fs-3">Marzo</span>
    <span class="mx-2 fs-4 fw-light">2020, Ju.</span>

    <div class="">
      <button class="btn btn-danger mx-2">
        <i class="fa fa-trash-alt"></i>
      </button>
      <button class="btn btn-primary">
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>

  <hr />
  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="¿Qué sucedió hoy?"></textarea>
  </div>
  <create-entry icon="fa-save"></create-entry>

  <img
    src="https://imgs.search.brave.com/Y3S0df5ZPSD-HBxvSYIuMvp7GN2c-UMh3ELbdMd1DC4/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5G/SDM5SnBiZ1JaM3Bv/ekZxY0UzQTVBSGFF/byZwaWQ9QXBp"
    alt="entry-picture"
    class="img-thumbail"
  />
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    CreateEntry: defineAsyncComponent(() =>
      import("../components/CreateEntry.vue")
    ),
  },
};
</script>

<style lang="scss" scoped>
textarea {
  position: relative;
  width: 95%;
  border: none;
  height: 90%;

  &:focus {
    outline: none;
  }
}

img {
  width: 200px;
  position: fixed;
  bottom: 50px;
  right: 28%;
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>
