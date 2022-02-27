<script>
export default {
  props: {
    title: String,
    start: {
      type: Number,
      //required: true,
      default: 21,
      validator(value) {
        return value > 0;
      },
      // default() {
      //   return { message: 'hello' }
      // }
    },
  },
  data() {
    return {
      counter: this.start,
    };
  },
  computed: {
    squareCounter() {
      return this.counter * this.counter;
    },
    customTitle() {
      return this.title || "Counter";
    },
  },
  methods: {
    getSquareValue() {
      return this.counter * this.counter;
    },
    increase() {
      this.counter++;
    },
    decrease() {
      this.counter--;
    },
  },
};
</script>

<template>
  <h2>{{ customTitle }}</h2>
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
  <button @click="increase">+1</button>
  <button @click="decrease">-1</button>
</template>

<style>
button {
  background-color: green;
  border-radius: 5px;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  margin: 0 5px;
  padding: 5px 15px;
  transition: 0.3s ease-in-out;
}

button:hover {
  background-color: darkgreen;
  cursor: pointer;
  transition: 0.5s ease-in-out;
}
</style>
