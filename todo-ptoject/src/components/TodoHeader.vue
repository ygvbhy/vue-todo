<template>
  <header>
    <h1>TODO it !!</h1>
  </header>
</template>

<script>
export default {
  name: "TodoHeader",
};
</script>

<!-- scoped 는 이 해당 하는 파일 안에서만 허용 하게 하는 조건임 -->
<style scoped>
h1 {
  color: #2f3b52;
  font-weight: 900;
  margin: 2.5rem 0 1.5rem;
}
</style>
