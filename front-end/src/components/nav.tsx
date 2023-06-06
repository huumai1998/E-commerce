
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <>
    <section className="nav">
      <div className='nav-container'>
        <div className="logo-links">
          {/* <img src="">Logo here</img> */}<p>Logo</p>
          <Link to="/">Link Name here</Link>
          <Link to="/">Link Name here</Link>
          <Link to="/">Link Name here</Link>
        </div>
        <div className="login-register-pages">
          <Link to="">Login</Link>
          <Link to="">Register</Link>
        </div>
      </div>
    </section>
    </>
  )
}
