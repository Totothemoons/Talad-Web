import './Header.css'

function Header(){
    return(
        <>
            <header className='main-header'>
                <div className='header-wrapper'>

                    <div className='logo'>
                    <h1>Ta<span className="orange-letter">l</span>ad</h1>

                    </div>
                    
                    <div className='header-navigator'>
                        <ul className='nav-header'>
                            <li><a href='https://www.facebook.com/profile.php?id=61574804248166'>Contact</a></li>
                        </ul>
                    </div>

                </div>
            </header>
        </>
    )
}

export default Header;