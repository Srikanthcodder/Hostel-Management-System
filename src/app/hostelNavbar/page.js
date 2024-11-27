import './style.css'

const hostelNavbar = () => {
    return (<>
      <div className="bg-image">

        <nav className="navbar">
            <div className="logo">LOGO</div>
            <div className="search-icon">
            <input type="text" placeholder="Search Location" className="search-input"  />
              <i className="fas fa-search" />

        
            </div>
            <ul className="nav-links">

                <li>  Home   </li>
                <li> Login   </li>
                <li> SignUP   </li>
                <li> Profile</li>

            </ul>


        </nav>
        </div>
    </>)
}
export default hostelNavbar;