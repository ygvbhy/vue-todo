<template>
  <div>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {
      todoItems: {},
    };
  },
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        console.log("test");
      }
    }
  },
};
</script>

<style lang="scss" scoped></style>
