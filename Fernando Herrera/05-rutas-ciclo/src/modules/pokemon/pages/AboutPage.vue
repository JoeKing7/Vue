<template>
  <h1>About Page</h1>
  <hr />
  <h2>{{ name }}</h2>
  <button @click="onChangeName">Change Name</button>
</template>

<script>
export default {
  data() {
    return {
      name: 'Gercho7',
    }
  },
  methods: {
    onChangeName() {
      this.name = 'Juancho Polo'
    },
  },

  beforeCreate() {
    console.log('Before create')
  },
  created() {
    console.log('Created')
  },
  beforeMount() {
    console.log('Before Mount')
  },
  mounted() {
    console.log('Mounted')
  },
  beforeUpdate() {
    console.log('Before update')
  },
  updated() {
    console.log('Updated')
  },
  activated() {
    console.log('Activated')
  },
  deactivated() {
    console.log('Deactivated')
  },
  beforeUnmount() {
    console.log('Before Unmount')
  },
  unmounted() {
    console.log('Unmounted')
  },
  errorCaptured: (err, vm, info) => {
    console.log('Error captured')
  },
  renderTracked({ key, target, type }) {
    console.log('render Tracked')
  },
  renderTriggered({ key, target, type }) {
    console.log('')
  },
}
</script>
