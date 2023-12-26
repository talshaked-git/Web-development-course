function Item(props)
{
    return(
        <div onClick={() => props.onChecked(props.id)}>
            <li >{props.text}</li>
        </div>
        
    )
}

export default Item;

    // const [isClicked, setIsClicked] = useState(false);
    // function handleClick() {
    //     setIsClicked((prevValue) => {
    //     return !prevValue;
    //     }); }
    // inside li onClick={handleClick} style={{ textDecoration: isClicked ? "line-through" : "none" }} 