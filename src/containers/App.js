import React, { PureComponent } from 'react';
// import Radium, { StyleRoot } from 'radium';
import './App.css';
import Validation from '../components/ValidationComponent/Validation';
import Char from '../components/CharComponent/CharComponent';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('App.js',props);
    this.state = {
      persons: [
            {id:'ksks', name: 'Max', age: 28},
            {id:'kskd3s', name: 'Manu', age: 30},
            {id:'ksk32s', name: 'Dani', age: 24},      
          ],
          otherState: 'Some other value',
          showPersons: false,
          txt: '',
          txt_length: '4',
          txt_arr: []
    }
  }

  componentWillMount() {
    console.log('ComponentWillMount');
  }

  componentDidMount() {
    console.log('ComponentDidMount');
  }
  componentWillReceiveProps(nextProps) {
    console.log('will receive person2', nextProps);
}
// shouldComponentUpdate(nextProps, nextState) {
//     console.log('update persons2',nextState);
//     return nextState.persons !== this.state.persons ||
//            nextState.showPersons !== this.state.showPersons;
// }
componentWillUpdate(nextProps,nextState) {
    console.log('Nooo2');
}
componentDidUpdate() {
    console.log('Yes, it did!2');
}

  // state = {
  //   persons: [
  //     {id:'ksks', name: 'Max', age: 28},
  //     {id:'kskd3s', name: 'Manu', age: 30},
  //     {id:'ksk32s', name: 'Dani', age: 24},      
  //   ],
  //   otherState: 'Some other value',
  //   showPersons: false,
  //   txt_length: '4',
  //   txt_arr: []
  // }

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
    // console.log('Hii');
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
      txt: txt,
      txt_len: txt.length,
      txt_arr: txt_arr,
    });
  }

  deleteCharHandler = (charIndex) => {
    const char_arr = [...this.state.txt_arr];
    char_arr.splice(charIndex,1);
    var textNew = char_arr.join('');
    console.log(char_arr);
    this.setState({txt_arr: char_arr, txt_len: char_arr.length});
    document.getElementById('dynText').value = textNew;
  }

  render() {
    console.log('render');
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
    var persons = null;
    if(this.state.showPersons) {
      persons = (
                  <div>
                      <Persons 
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler}
                      />  
                  </div> 
                    );
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
                
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'white'
      // };
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
    const style = {
      textAlign: 'center',
      marginTop: '5vh'
    }
    return (
      // <StyleRoot>
        <div className="App">
        <Cockpit 
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />     
        <div style={style}>
        <input type="text" id="dynText" onChange={(event) => this.showLengthHandler(event)}/>
        <p>{this.state.txt_len}</p>
        <Validation txtlen={this.state.txt_len}></Validation>
        </div>
        {char_divs}
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
