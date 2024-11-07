


export default function Hi(props) {
    return(
        <div>
            <h1>{(props.isLogin == "True") ? "Welcome Subhan" : "Welcome Guest"}</h1>
            <p>My nane is {props.name} and class is {props.class}.</p>
        </div>
    )
}