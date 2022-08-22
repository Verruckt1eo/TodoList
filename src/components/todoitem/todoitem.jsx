function TodoItem(props){
    let className = ""
    if(props.todo.status==true){
    className="completed"
    }
    return <li className={className}>{props.todo.name}
    <input type="checkbox" onChange={()=>{
      props.changeTodoStatus(props.index)
    }}/>
    <button onClick={()=>{
      props.deleteTodo(props.index)
    }}>Удалить</button>
    </li>
}
export default TodoItem