import './App.css';
import React from 'react';
import Select from 'react-select';

const options1 = [
  { value: '0', label: 'administrator' },
  { value: '1', label: 'dispatcher' },
  { value: '2', label: 'maintenance' }
]

const options2 = [
  { value: '0', label: 'administrator', app: 'maintenance' }
]

const styles = { 
  width: '250px'
};

const colourStyles = {
  
  select: (provided, state) => {
    const border = state.isSelected ? '1px solid black' : '1px solid black';
    const width = '500px';

    return { ...provided, border, width}
  },
  menu: styles => ({ ...styles, width: '500px'}),
  control: (provided, state) => {
    const border = '1px solid black';
    const width = '500px';

    return { ...provided, border, width}
  }
}


class App extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      roles: {},
    }
  }

  onChangeHandler(application, event)
  {
    let roles  = {...this.state.roles };
    event.length > 0 ? roles[application] = event.map(option => option.value) : delete roles[application];
    this.setState({ roles: roles }, () => console.log(this.state.roles));
  }

  render() {
    
    return (
      <div className="App">
        <Select isMulti options={options1} styles={colourStyles} onChange={ this.onChangeHandler.bind(this, 'dispatch') } />
        <br /><br />
        <Select isMulti options={options2} styles={colourStyles} onChange={ this.onChangeHandler.bind(this, 'maintenance') } />
      </div>
    
    )}
}

export default App;
