import React from "react";
import One from "./components/One";
import ToggleTheme from "./components/ToggleTheme";
class  App extends React.Component {
  state = {
    theme : 'dark'
  }
  toggleTheme = () => {
   
      this.setState({
        theme :  this.state.theme === 'dark' ? 'light' : 'dark'
     })
   

    

  }
  render () {
    return (
      <div style={{background : this.state.theme === 'dark' ? 'blue' : 'white'} }>
             This is App 
             
             <One theme={this.state.theme} />
             <ToggleTheme toggleTheme = {this.toggleTheme} />
             
            
      </div>
    );
  }
  
}

export default App;
