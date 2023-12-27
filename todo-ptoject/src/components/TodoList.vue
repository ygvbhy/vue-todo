<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in todoItems" :key="index" class="shadow">
        <i
          class="checkBtn fas fa-check"
          :class="{ checkBtnCompleted: todoItem.completed }"
          @click="toggleComplete(todoItem, index)"
        ></i>
        <span :class="{ textCompleted: todoItem.completed }">{{
          todoItem.item
        }}</span>
        <span class="removeBtn" @click="removeTodo(todoItem, index)">
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
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
        }
      }
    },
    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    },
    toggleComplete(todoItem, index) {
      console.log(index);
      todoItem.completed = !todoItem.completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
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
  cursor: pointer;
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
  cursor: pointer;
}
</style>
