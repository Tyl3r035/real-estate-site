
const Header = (props)=>{
    return(
        <header id="header">
            <div className="logo">
                Logo
            </div>
            <nav className="nav-fluid">
                <a href="/" className="nav-fluid__link">
                    Buy
                </a>
                <a href="/" className="nav-fluid__link">
                    Rent
                </a>
                <a href="/" className="nav-fluid__link">
                    Agent
                </a>
                <a href="/" className="nav-fluid__link">
                    Sell
                </a>
                <a href="/" className="nav-fluid__link">
                    Manage Rentals
                </a>
                <a href="/" className="nav-fluid__link">
                    Advertise
                </a>
                <a href="/" className="nav-fluid__link">
                    Mortgage
                </a>
            </nav>
            <div className="btn-fluid">
                <a href="/" className="btn-fluid__log-in">Log In</a>
                <a href="/" className="btn-fluid__sign-up">Sign Up</a>
            </div>
            <div className="menu-btn">
                <div className="menu-bar"/>
                <div className="menu-bar"/>
                <div className="menu-bar"/>
            </div>
        </header>
    )
}

export default Header;