import {Outlet} from 'react-router';
import Navbar from './Navbar.jsx';
const Sharedlsyout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet />
        </div>
    );
}

export default Sharedlsyout;
