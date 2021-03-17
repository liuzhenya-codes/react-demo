const TodoListUI = (props) => {
  return (
    <div>
      <input value={props.inputValue} onChange={props.handleInputChange} onKeyUp={props.handelInputKeyUp}/>
      <button onClick={props.handleBtnClick}>提交</button>
      <ul>
        {
          props.list.map((item, index) => {
            return (
              <li key={item} onClick={() => {props.handelDelete(index)}}>{item}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default TodoListUI