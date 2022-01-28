
const Header = (props)=>{
    return(
        <header id="header">
            <div className="logo">
                Logo
            </div>
            <nav className="nav-fluid">
                <Link href="/">
                <a className="nav-fluid__Link">
                    Buy
                </a>
                </Link>
                <Link href="/">
                <a className="nav-fluid__Link">
                    Rent
                </a>
                </Link>
                <Link href="/">
                <a className="nav-fluid__Link">
                    Agent
                </a>
                </Link>
                <Link href="/">
                <a className="nav-fluid__Link">
                    Sell
                </a>
                </Link>
                <Link href="/">
                <a className="nav-fluid__Link">
                    Manage Rentals
                </a>
                </Link>
                <Link href="/">
                <a className="nav-fluid__Link">
                    Advertise
                </a>
                </Link>
                <Link href="/">
                <a className="nav-fluid__Link">
                    Mortgage
                </a>
                </Link>
            </nav>
            <div className="btn-fluid">
                <a className="btn-fluid__log-in">Log In</a>
                <a className="btn-fluid__sign-up">Sign Up</a>
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
