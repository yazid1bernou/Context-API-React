import React, { useContext } from "react";
function Two () {
     const themeContext = useContext;
    return (
        <div>
           <h2 style={{color : themeContext.theme === 'dark'  ? 'white' : 'blue'}}>This is Two.</h2>
                        {themeContext.theme}


           {/*  <ThemeContext.Consumer>
                
             {({theme}) => 
               <>
                   <h2 style={{color : theme === 'dark'  ? 'white' : 'blue'}}>This is Two.</h2>
                        {theme}
               </>


             }
                    
                       
            </ThemeContext.Consumer> */}
        </div>
    )
}

export default Two ;