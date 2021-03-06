import Link from 'next/link';

const Header = (props)=>{
    return(
        <header id="header">
            <div className="logo">
                <Link href="/index">
                    <a>Logo</a>
                </Link>
            </div>
            <div className="nav-fluid">
                <Link href="/buy">
                    <a className="nav-fluid__Link">
                        Buy
                    </a>
                </Link>
                <a className="nav-fluid__Link">
                    Rent
                </a>
                <a className="nav-fluid__Link">
                    Agent
                </a>
                <a className="nav-fluid__Link">
                    Sell
                </a>
                <a className="nav-fluid__Link">
                    Manage Rentals
                </a>
                <a className="nav-fluid__Link">
                    Advertise
                </a>
                <a className="nav-fluid__Link">
                    Mortgage
                </a>
            </div>
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
