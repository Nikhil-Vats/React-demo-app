import React, { Component } from 'react';
// import Radium, { StyleRoot } from 'radium';
import classes from './App.css';
import Validation from './ValidationComponent/Validation';
import Char from './CharComponent/CharComponent';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      {id:'ksks', name: 'Max', age: 28},
      {id:'kskd3s', name: 'Manu', age: 30},
      {id:'ksk32s', name: 'Dani', age: 24},      
    ],
    otherState: 'Some other value',
    showPersons: false,
    txt_length: '4',
    txt_arr: []
  }

  // switchNameHandler = (newName) => {
  //   console.log('Was clicked!');
  //   // DON'T DO THIS - this.state.persons[0].name = 'Nikhil'
  //   this.setState({
  //     persons: [
  //       {name : newName, age: 19},
  //       {name: 'Manu', age: 30},
  //       {name: 'Dani', age: 24},
  //     ]
  //   })
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {...this.state.persons[personIndex]
    };
    //Alternative approach
    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons:persons});
    // this.setState({
    //   persons: [
    //     {name: 'Max', age: 19},
    //     {name: event.target.value, age: 30},
    //     {name: 'Dani', age: 24},
    //   ]
    // })
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice(); //slice with no argument creates a COPY of array rather than assigning a pointer to it
    //OR const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    // console.log('Hii');
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  showLengthHandler = (event) => {
    var txt = event.target.value;
    var txt_arr = txt.split('');
    // console.log(txt_length);
    this.setState({
      txt_len: txt.length,
      txt_arr: txt_arr,
    });
  }

  deleteCharHandler = (charIndex) => {
    const char_arr = [...this.state.txt_arr];
    char_arr.splice(charIndex,1);
    console.log(char_arr);
    this.setState({txt_arr: char_arr});
  }

  render() {
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // };
    let btnClass = '';
    var persons = null;
    if(this.state.showPersons) {
      persons = (
                  <div>
                    {
                      this.state.persons.map((person, index) => {
                        return <Person 
                                  click={this.deletePersonHandler.bind(this, index)}
                                  name={person.name}
                                  age={person.age}
                                  key={person.id}
                                  changed={(event) => this.nameChangedHandler(event, person.id)}
                                />
                      })
                    }
                    {/* <Person 
                      name={this.state.persons[0].name} 
                      age={this.state.persons[0].age}/>
                    <Person 
                      changed={this.nameChangedHandler}
                      name={this.state.persons[1].name} 
                      age={this.state.persons[1].age}
                      click={this.switchNameHandler.bind(this, 'Namita')}>My Hobbies:Racing</Person>
                    <Person 
                      name={this.state.persons[2].name} 
                      age={this.state.persons[2].age}/>  */}
                  </div>
                );
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'white'
      // };
      btnClass = classes.Red;
    }
    else 
      persons = null;
    var char_divs = (
      this.state.txt_arr.map((char, index) => {
        return (<Char 
                  alpha={char}
                  click={this.deleteCharHandler.bind(this, index)}>
                </Char>)
      })
    );

    let assignedclasses= []; 
    if(this.state.persons.length <= 2) {
      assignedclasses.push(classes.red);
    }

    if(this.state.persons.length <= 1) {
      assignedclasses.push(classes.bold);
    }

    return (
      // <StyleRoot>
      <div className={classes.App}>
        <h1>Hi, I am a react app.</h1>
        <p className={assignedclasses.join(' ')}>This is really working!</p>
        { /* Dont use this syntax, use the one in click event below */ }
        <input type="text" onChange={(event) => this.showLengthHandler(event)}/>
        <p>{this.state.txt_len}</p>
        <Validation txtlen={this.state.txt_len}></Validation>
        {char_divs}
        <div>
          <button 
            className={btnClass}
            onClick={() => this.togglePersonsHandler()}>Toggle Persons
          </button>
        </div>
        {persons}
      </div>
      // </StyleRoot>
      //expression above can't use if else but can use ternary conditional operators
      // return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'This is same as above'));
    );
  }
}

// export default Radium(App);
export default App;
