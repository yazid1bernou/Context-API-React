import Two from "./Two";
function One (props){
     
    return (
        <div>
           <h1>This is One. </h1> 
           <Two theme={props.theme}/>
        </div>
    )
}

export default One ;