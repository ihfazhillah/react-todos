import React from 'react';


export default class TodoHeader extends React.Component {

  render(){
    return (
      <div>
        <h2>Todo List</h2>
        <a href="#">All</a> | <a href="#">Completed</a> | <a href="#">Active</a>
      </div>
    )
  }

}
