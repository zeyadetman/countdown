import React, {Component} from 'react';
import './App.css'
import Clock from './Clock.jsx'
import {Form, FormControl, Button} from 'react-bootstrap';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            deadline: 'January 1, 2018'
        }
    }

    changeDeadline(){
        const checker = Date.parse(document.getElementById('userDate').value) - Date.parse(new Date());
        if(isNaN(checker)) {alert('Enter Valid Date!'); document.getElementById('userDate').value = '';}
        else this.setState({deadline:document.getElementById('userDate').value});
    }

    render(){
        return (<div className="App">
            <div className="title">Countdown to {this.state.deadline}</div>
            <Clock deadline = {this.state.deadline} />
            <Form className="edit" inline>
                <FormControl placeholder="January 1, 2018" id="userDate" />
                <Button onClick={()=>this.changeDeadline()}>Submit</Button>
            </Form>
        </div>);
    }
}

export default App;