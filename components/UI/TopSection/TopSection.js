
const TopSection = (props)=>{
    return(<div>
        <section className="top-section top-section__buy">
            <div className="top-section__dark-box"></div>
            <div className="top-section__inner-box">
                <h2 className="top-section__title">
                    Your Next Home Search Starts Here
                </h2>
                {/* <div className="top-section__nav-fluid">
                    <a href="/" className="top-section__nav-link top-section__nav-link--active">
                        Buy
                    </a>
                    <a href="/" className="top-section__nav-link">
                        Rent
                    </a>
                    <a href="/" className="top-section__nav-link">
                        Agent
                    </a>
                </div> */}
                <br/>
                <form className="top-section__search-form">
                    <input type="text" placeholder="Search City, State, or ZIP" className="top-section__search-input"/>
                    <button type="submit" className="top-section__search-btn">
                        Search
                    </button>
                </form>
            </div>
        </section>
    </div>)
}

export default TopSection;