import { takeEvery, put } from 'redux-saga/effects'
import { GET_TODOLIST_DATA } from './actionTypes'
import { getInitTodolist } from './actionCreators'
import axios from 'axios'

function* getTodolistData () {
  try {
    const res = yield axios.get('mock/todolist.json') // 使用 generation 函数获取异步数据
    const action = getInitTodolist(res.data) // 通过获取到的异步数据获得一个 action 对象
    yield put(action) // put 给 reducer 执行, 类似于 dispatch
  } catch(e) {
    console.warn(e)
  }
}

function* todolist () {
  yield takeEvery(GET_TODOLIST_DATA, getTodolistData) // 全局响应 actionType: GET_TODOLIST_DATA, 并触发函数 getTodolistData
}

export default todolist