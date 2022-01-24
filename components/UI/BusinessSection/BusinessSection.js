
const BusinessSection = (props)=>{
    return(
        <section className="business-section">
        <div className="business-section__business-col business-section__business-col--rentals business-section__business-col--border">
            <div className="business-section__col-dark"/>
                <h3 className="business-section__title">
                    Manage Your Rentals
                </h3>
                <a href="/" className="business-section__col-link">Learn More</a>
            </div>
            <div className="business-section__business-col business-section__business-col--advertise">
            <div className="business-section__col-dark"/>
                <h3 className="business-section__title">
                    Advertise with Us
                </h3>
                <a href="/" className="business-section__col-link">Learn More</a>
            </div>
        </section>
    )
}

export default BusinessSection;