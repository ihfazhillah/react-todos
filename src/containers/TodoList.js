import React from 'react';
import _ from 'lodash';


export default class TodoList extends React.Component {
  static defaultProps  = {

  todos : [
    {
      id: 1,
      completed: false,
      text: 'Learn Redux'
    },

    {
      id: 2,
      completed: false,
      text: 'Beli Polpen'
    },

    {
      id: 3,
      completed: true,
      text: 'take some examples'
    }
  ]

  }

  render(){
    let todos = this.props.todos;

    let rows = []

    _.forEach(todos, (todo, index) => {
      let text;

      if(todo.completed){
        text = <strike>{todo.text}</strike>
      } else {
        text = todo.text
      }

      rows.push(<li key={index}><button>Remove</button> {text}</li>);
    });

    return (
      <ul>
        {rows}
      </ul>
    )

  }
}

