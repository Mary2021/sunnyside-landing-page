const SmallServiceCard = ({ heading, text}) => {
    return (
        <div className='SmallServiceCardContainer'>
            <h3 className='SmallServiceCardHeading'>{heading}</h3>
            <p className='SmallServiceCardText'>{text}</p>
        </div>
    )
}

export default SmallServiceCard;