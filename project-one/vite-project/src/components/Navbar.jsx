import reactLogo from '../assets/react.svg'
import '../App.css'

function Navbar() {
    return (
        <>
            <nav>
                <div className="logo">
                    <img className='logo-img' src={reactLogo} alt="" />
                    <h3>Reactfacts</h3>
                </div>
                <div className="logo">
                    <h4>React Course - Project 1</h4>
                </div>
            </nav>
        </>
    )
}

export default Navbar;