<template>
  <div>
      <component :is="Button" text2="我是props"/>
      <component :is="Button2"/>
  </div>
</template>

<script>
export default {
    data() {
        return {
            Button: {render: () =>{}},
            Button2: {render: () =>{}},
        };
    },
    components: {
    },
    mounted () {
        SystemJS.import(`${location.origin}/ButtonComponent.js`).then(data => {
            this.Button = data.default('彪兄无敌');
        })
        SystemJS.import(`${location.origin}/ButtonComponent2.js`).then(data => {
            this.Button2 = data.default();
        })
    },
    methods: {
    }
};
</script>
