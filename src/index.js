import React from 'react'
import ReactDOM from 'react-dom'
import BasicTodoList from './basic-todolist/BasicTodoList' // 使用 React 基础知识完成 todolist 组件, 组件内包括一些基础知识的笔记, 请注意复习
// import OpacityInTransition from './animation-demos/css-transition/OpacityInTransition' // 使用纯 css 的 transition 形式制作渐隐渐显
// import OpacityInAnimation from './animation-demos/css-animation/OpacityInAnimation' // 使用纯 css 的 animation 形式制作渐隐渐显
// import Opacity from './animation-demos/css-transition-component/Opacity'// 使用第三方组件 react-transition-group 实现单元素渐隐渐显
// import Opacities from './animation-demos/css-transition-group/Opacities'// 使用第三方组件 react-transition-group 实现循环列表渐隐渐显


ReactDOM.render(
  <BasicTodoList />,
  // <OpacityInTransition />,
  // <OpacityInAnimation />,
  // <Opacity />,
  // <Opacities />,
  document.getElementById('root')
);
