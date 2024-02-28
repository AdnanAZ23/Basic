export const User = (props) => {
    return (
        <div>
            {props.name} {props.age}
        </div>
    )
}

export const Check = (props) => {
    return (
        <div>
            {props.name} {props.isGasPlanet}
        </div>
    )
}