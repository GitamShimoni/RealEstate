import './header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div id='header' className='navbar'>
        <nav className='navbar'>
          <Link to={"/"}>
            <img id='nest-icon' src="data:image/png;base64,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" alt="" />
          </Link>
            <Link to={"../"}>
              <h1>Home</h1>
            </Link>
            <Link to={"/listings"}>
              <h1>See Listings</h1>
            </Link>
            <Link to={"/about"}>
              <h1>About Us</h1>
            </Link>
        </nav>
    </div>
  )
}
