
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <>
    <div className="nav">
      <div className='nav-container'>
        <div className="logo-links">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            {/* burgur bar */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-item nav-link active" to="#">Home <span className="sr-only">(current)</span></Link>
                <Link className="nav-item nav-link" to="#">Features</Link>
                <Link className="nav-item nav-link" to="#">Pricing</Link>
              </div>
            </div>
          </nav>
        </div>
        <div className="login-register-pages">
          {/* <Link to="">Login</Link>
          <Link to="">Register</Link> */}
        </div>
      </div>
    </div>
    </>
  )
}
