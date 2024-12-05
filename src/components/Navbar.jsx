import '../App.css'
import Logo from './Logo';
import Cart from './Cart';
import { Link } from 'react-router-dom';

const Navbar = function () {
    return (
       <nav>
        <Logo />
        <div>
            <Link className='link' to="/">Home</Link>
            <Link className='link' to="/shop">Shop</Link>
            <Cart />
        </div>
       </nav>
    )
};

export default Navbar;