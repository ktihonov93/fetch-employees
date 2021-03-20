import React, { Component } from 'react'
import './App.css';
import axios from 'axios';
import DisplayEmployee from './components/DisplayEmployee';
import LoadingSpinner from './components/LoadingSpinner';

const sampleEmployee = {
  gender: 'male',
  name: {
    first: 'Charlie',
    last: 'Thompson',
  },
  location: {
    street: {
      number: 761,
      name: 'Tay Street',
    },
    city: 'Timaru',
    postcode: 76111,
  },
  email: 'charlie.thompson@example.com',
  picture: {
    medium: 'https://randomuser.me/api/portraits/med/men/40.jpg',
  },
};

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      employee: null,
      loading: false
    }
    this.getEmployee = this.getEmployee.bind(this);
  }

  componentDidMount() {
    this.getEmployee()
      };
      getEmployee (){
        this.setState({ loading: true }, () => {
          // Send the request  
          axios.get('https://randomuser.me/api?nat=en')  
            // Extract the DATA from the received response  
            .then(response => response.data)  
            // Use this data to update the state  
            .then(data => {  
              this.setState({ 
                loading: false, 
                employee: data.results[0]  
              });  
          });  
        }
          )
      }
  

  render() {
    const { employee, loading } = this.state;
    return (
      <div className="App">
        {loading || !employee ? <LoadingSpinner /> : <DisplayEmployee employee={employee}/>}
        <button type="button" onClick={this.getEmployee}>Get employee</button>        
      </div>
    )
  }
}

export default App;





