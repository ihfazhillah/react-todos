import TodoHeader from './TodoHeader';
import TodoInput from './InputBox';
import TodoList from './TodoList';
import React from 'react';


export default class TodosContainer extends React.Component {
  render(){
    return (
      <div>
        <TodoHeader/>
        <TodoInput/>
        <TodoList/>
      </div>
    )
  }
}
