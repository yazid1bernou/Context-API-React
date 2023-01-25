function Two (props) {

    return (
        <div>
            <h2 style={{color : props.theme === 'dark'  ? 'white' : 'blue'}}>This is Two.</h2>
            {props.theme}
        </div>
    )
}

export default Two ;