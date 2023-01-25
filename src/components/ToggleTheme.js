import React from 'react'
import ThemeContext from '../Context/ThemeContext'

class  ToggleTheme extends React.Component {
    
    componentDidUpdate() {
      console.log(this.context.theme)
    }
    render () {
        return (


            <div>
                     
               
                    <button type="button" onClick={this.context.toggleTheme }> Change Theme { this.context.theme === 'dark' ? 'light' : 'dark'}</button>
                     
                 
                
            </div>
          )
    }
 
}
ToggleTheme.contextType = ThemeContext ;
export default ToggleTheme ;