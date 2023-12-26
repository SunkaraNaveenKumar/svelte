<script>
  import AddTodo from "./AddTodo.svelte";
  import TodoList from "./TodoList.svelte";
  let todos = [
    { id: 1, text: "Create a Svelte starter app", done: true },
    { id: 2, text: "Create your first component", done: true },
    { id: 3, text: "Test your first component", done: false },
  ];
  // $: console.log(todos);

  let text = "";
  let taskDone = false;
  // $: console.log(text);
  // $: console.log(taskDone);
  let editItem = {};
  $: {
    if (Object.keys(editItem)?.length > 0) {
      editItem = { ...editItem, text, done: taskDone };
    }
  }
  // $: console.log("editItem", editItem);
  let editToggle = false;
  $: unCompletedTasks = todos.filter((ele) => !ele.done).length;
  $: string = `${unCompletedTasks} of ${todos.length} remaining`;
  const handleAddtext = () => {
    if (text) {
      const id = todos[todos.length - 1].id + 1;
      // const done = !todos[todos.length - 1].done;
      const formData = {
        id,
        text,
        done: taskDone,
      };
      // console.log(formData);
      todos = [...todos, formData];
      text = "";
      editItem = {};
      taskDone = false;
    }
  };
  const handleDeleteItem = (e) => {
    const { id } = e.detail;
    todos = todos.filter((ele) => {
      return ele.id !== id;
    });
    editItem = {};
  };
  const handleEditItem = (e) => {
    const todo = e.detail;
    // console.log(todo)
    const { id, text: textVal, done } = todo;
    text = textVal;
    editItem = todo;
    editToggle = true;
    taskDone = done;
  };
  const handleCancel = () => {
    text = "";
    editToggle = false;
    editItem = {};
    taskDone = false;
  };
  const handleSave = () => {
    const editedTodos = todos.map((todo) => {
      if (todo.id === editItem.id) {
        return { ...todo, ...editItem };
      } else {
        return todo;
      }
    });
    taskDone = false;
    todos = editedTodos;
    editItem = {};
    text = "";
    editToggle = false;
    // console.log(editedTodos);
  };
</script>

<div>
  <p>{string}</p>
  <AddTodo
    bind:text
    {handleAddtext}
    {editToggle}
    {handleCancel}
    {handleSave}
    bind:taskDone
  />
  <TodoList
    {todos}
    on:deleteItem={handleDeleteItem}
    on:editItem={handleEditItem}
  />
</div>
