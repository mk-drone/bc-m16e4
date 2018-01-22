import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from './../components/Title';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
    }

    addTodo(val){
        const todo = { 
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    removeTodo(id){
        const rest = this.state.data.filter(todo=>todo.id !== id);
        this.setState({rest});
    }
    
    render(){
        return (
            <div className={style.TodoApp}>
                <Title title={'TodoList'} left={this.state.data.length} />
            </div>
        );
    }
}

export default App;