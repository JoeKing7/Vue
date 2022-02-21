const APP = Vue.createApp({
  // template: `
    // <h1>Hola Mundo</h1>
    // <p>{{ 1 + 1 }}</p>
  // `,
  data() {
    return {
      quote: "I'm Batman",
      author: 'Bruce Wayne'
    }
  },
  methods: {
    changeQuote(event) {
      this.author = "Gercho";
      this.capitalize();
    },
    capitalize() {
      this.quote = this.quote.toUpperCase();
    }
  },

})

APP.mount('#app');