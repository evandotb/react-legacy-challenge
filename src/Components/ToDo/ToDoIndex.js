import React, {Component} from 'react';
import { Input, Button } from 'reactstrap';

export default class ToDoIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskAdd: '',
            taskList: []
        }
    } 

    enterTask = (e) => {
        this.setState({taskAdd: e.target.value})
    }

    addTask() {
        this.setState(state => {
        const list = state.taskList.concat(state.taskAdd);
        return {
            list,
            taskAdd: ''
        }
    })
    }


    render() {
        return(
            <div>
                <Input type='text' placeholder='Enter Task' value={this.state.taskAdd} onChange={this.enterTask} />
                <Button type='button' onClick={this.addTask}>Add task</Button>
                {this.state.taskList.map(task => 
                    <ul>{task}</ul>
                    )}
            </div>
        )
    }
}