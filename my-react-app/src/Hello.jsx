import Hi from "./Hi"
import AI from "./Images/AI.webp"


export default function Hello(props) {





    return (
        <div>
            <h1>{(props.isLogin == "True") ? "Welcome Subhan" : "Welcome Guest"}</h1>
            <h2>Hello, {props.name}</h2>
            <p>My class is {props.class}</p>
            <Hi name={props.name} class={props.class} isLogin={props.isLogin}/>
            <img src={AI} alt="Not Avariable" width="350px" />
        </div>
    )
}