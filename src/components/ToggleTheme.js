import React from 'react'

export default function ToggleTheme(props) {
  return (
    <div>
         <button type="button" onClick={props.toggleTheme }> Chnage Theme</button>
    </div>
  )
}
