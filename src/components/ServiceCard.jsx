const ServiceCard = ({ heading, text }) => {
        return (
            <div>
                <h2 className='ServiceCardHeading'>{heading}</h2>
                <p className='ServiceCardText'>{text}</p>
                <a className='ServiceCardLink'>Learn more</a>
            </div>
        )
}

export default ServiceCard;