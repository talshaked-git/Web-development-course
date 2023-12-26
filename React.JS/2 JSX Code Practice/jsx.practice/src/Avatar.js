import "./App.css";

function Avatar(props) {
    return (
        <div>
            <img className="circle-img" src={props.imgURL} alt="avatar_img" />
        </div>
    )
}

export default Avatar;