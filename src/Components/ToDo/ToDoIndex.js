import React, {Component} from 'react';
import { Input, Button } from 'reactstrap';

export default class ToDoIndex extends Component {
    constructor() {
        super();
        this.state = {
            taskAdd: '',
            taskList: []
        }
    } 

    enterTask = (e) => {
        this.setState({taskAdd: e.target.value})
    }

    addTask = (e) => {
        
    }
}