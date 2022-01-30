
const FilterSection = (props)=>{
    return(<div>

        <div className="filter-bar">
            <div className="filter-bar__search-fluid">
                <input type="text" className="filter-bar__search-input"/>
                <button className="filter-bar__search-btn">
                    Search
                </button>
            </div>
            <div className="filter-bar__btn-fluid">
                <div className="filter-bar__btn-col">
                    <button className="filter-bar__btn">
                        <div className="filter-bar__btn-circle filter-bar__btn-circle-red"></div>
                        <span className="filter-bar__btn-inner">For Sale</span>
                    </button>
                    <div className="filter-bar__btn-dropdown filter-btn__home-drop">
                        <button className="filter-bar__option-dropdown">
                            <div className="filter-bar__btn-circle filter-bar__btn-circle-red"></div>
                            <span className="filter-bar__btn-inner-option">For Sale</span>
                        </button>
                        <button className="filter-bar__option-dropdown">
                            <div className="filter-bar__btn-circle filter-bar__btn-circle-purple"></div>
                            <span className="filter-bar__btn-inner-option">For Sale</span>
                        </button>
                        <button className="filter-bar__option-dropdown">
                            <div className="filter-bar__btn-circle filter-bar__btn-circle-yellow"></div>
                            <span className="filter-bar__btn-inner-option">For Sale</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
    </div>)
}

export default FilterSection;