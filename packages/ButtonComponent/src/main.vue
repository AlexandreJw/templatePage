<template>
  <div>
   <p class='sss'> 我是一个Button1</p>
   <p>{{text}}</p>
   <p>{{text2}}</p>
  </div>
</template>

<script>
export default {
  props: ['text2'],
  data() {
      return {
        name: 'hujianwei'
      };
  },
  methods: {
  }
};
</script>
