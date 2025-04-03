import './footer.css'

function Footer(){
    return(
        <>
            <footer className='main-footer'>
                <div className='footer-wrapper'> 
                  <nav className='nav-footer'>
                    <li><img src="src/assets/react.svg" alt="logo" /></li>
                    <li><img src="public/vite.svg" alt="logo" /></li>
                    <li><img src="src/assets/react.svg" alt="logo" /></li>
                    <li><img src="public/vite.svg" alt='anotherlogo' /></li>
                  </nav>                   
                </div>
            </footer>
        </>
    )
}

export default Footer;