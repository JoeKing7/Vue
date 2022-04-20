export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repudiandae voluptas necessitatibus eligendi, vero sit! Eius inventore magni velit. Voluptate, consequuntur modi. Eum aperiam impedit voluptates quam doloremque sunt deleniti.",
      picture: null,
    },
    {
      id: new Date().getTime() + 1000,
      date: new Date().toDateString(),
      text: "Iusto aliquam ea explicabo corrupti asperiores perspiciatis accusantium. Nemo, ex ducimus amet ut sunt suscipit perspiciatis, hic mollitia enim sed a voluptas.",
      picture: null,
    },
    {
      id: new Date().getTime() + 2000,
      date: new Date().toDateString(),
      text: "Lorem, Et, aspernatur? Asperiores, unde molestias. Vel quos at et distinctio consequuntur minima! Ab sunt beatae officia doloribus error sed tenetur alias consequatur!",
      picture: null,
    },
  ],
});
