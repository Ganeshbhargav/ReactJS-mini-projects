function Box (props){
    const {text,className} = props
    const containerName = `box ${className}`
    return (
        <div className= {containerName}>
            <p className="box-title">{text}</p>
        </div>
    )
}
export default Box