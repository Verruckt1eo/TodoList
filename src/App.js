import { useState } from "react";
import TodoItem from "./components/todoitem/todoitem";
function App() {
  let [todos,setTodos] = useState([])
  let [text,setText] = useState("")
  function createTodo (){
    if(text.length >1){
      setTodos((prevTodos)=>{
        return [...prevTodos,{
          name:text,
          status:false
        }]
        
      })
      setText("")
    }else{
      alert("Введите хоть что-то")
    }
  }
  function changeText(e){
    setText(e.target.value)
  }

  function changeTodoStatus(index){
    let todo = todos[index]
    if(todo.status==true){
      todo.status=false
    }else{
      todo.status = true
    }
    setTodos([...todos])
  }
  function deleteTodo(index){
    todos.splice(index,1)
    setTodos([...todos])
  }
  
  



  return (
    <div className="App">
      <input type="text" placeholder="Дело №" value={text} onChange={changeText}/>
      <button onClick={createTodo}className="create">Создать</button>
      <ul>
        
        {
          todos.map((todo,index)=>{
            return <TodoItem key={index} todo={todo} index={index}changeTodoStatus={changeTodoStatus}deleteTodo={deleteTodo}/>
          })
        }
      </ul>

    </div>
  );
}

export default App;
