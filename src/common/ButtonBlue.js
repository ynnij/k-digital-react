
function ButtonBlue(props) {
    return (
        <button onClick={props.handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-4 rounded h-10">
            {props.caption}
        </button>
    )
}

export default ButtonBlue
