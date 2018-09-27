import React, {PureComponent} from "react";
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';
class Persons extends PureComponent {
    constructor(props) {
        super(props);
        console.log('App.js person',props);
      }
    
      componentWillMount() {
        console.log('ComponentWillMount person');
      }
    
      componentDidMount() {
        console.log('ComponentDidMount person');
      }
      componentWillReceiveProps(nextProps) {
          console.log('will receive person', nextProps);
      }
    //   shouldComponentUpdate(nextProps, nextState) {
    //       console.log('update persons',nextState);
    //       return nextProps.persons !== this.props.persons ||
    //              nextProps.changed !== this.props.changed ||
    //              nextProps.clicked !== this.props.clicked;
    //   }
      componentWillUpdate(nextProps,nextState) {
          console.log('Nooo');
      }
      componentDidUpdate() {
          console.log('Yes, it did!');
      }
    render () {
        console.log('render person');
        return this.props.persons.map((person, index) => {
                return <ErrorBoundary key={person.id}><Person 
                          click={this.props.clicked.bind(this, index)}
                          name={person.name}
                          age={person.age}
                          changed={(event) => this.props.changed(event, person.id)}></Person>
                          </ErrorBoundary>
    });
}
}
// const persons = (props) => props.persons.map((person, index) => {
//     return <ErrorBoundary key={person.id}><Person 
//               click={props.clicked.bind(this, index)}
//               name={person.name}
//               age={person.age}
//               changed={(event) => props.changed(event, person.id)}></Person>
//               </ErrorBoundary>
//   });

  export default Persons;