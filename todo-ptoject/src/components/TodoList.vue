<template>
  <div>
    <ul>
      <li v-for="dotoItem in todoItems" :key="dotoItem" class="shadow">
        {{ dotoItem }}
        <span class="removeBtn" @click="removeTodo()">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {
      todoItems: [],
    };
  },
  methods: {
    getTodoList() {
      if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
          this.todoItems.push(localStorage.key(i));
        }
      }
    },
    removeTodo() {},
  },
  created() {
    this.getTodoList();
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  background: white;
  border-radius: 5px;
  padding: 0 20px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #d3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
</style>
