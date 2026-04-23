function Notification(props){
    const {imageUrl,message,bgClass} = props
     const containerClassName = `notification-container ${bgClass}`
    return (
        <div className={containerClassName}>
            <img src={imageUrl} alt="icon" className="icon"/>
            <p className="message">{message}</p>
        </div>
    )
}
export default Notification