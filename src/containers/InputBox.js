import React from 'react';

export default class TodoInput extends React.Component {

  render(){
    return (
      <form>
        <input type="text" placeholder="Enter a new todo..."/>
        <input type="submit" value="Add"/>
      </form>
    )
  }

}
