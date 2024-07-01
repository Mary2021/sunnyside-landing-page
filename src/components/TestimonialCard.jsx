const TestimonialCard = ({ src, text, name, occupation }) => {
    return (
        <div className='TestimonialCard' style={{textAlign:'center'}}>
            <img src={src} className='TestemonialImage' alt="Picture of a customer"></img>
            <p className='TestemonialText'>{text}</p>
            <p className='TestemonialName'>{name}</p>
            <p className='TestemonialOccupation'>{occupation}</p>
        </div>
    )
}

export default TestimonialCard;