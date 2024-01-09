import Dropdown from 'react-bootstrap/Dropdown';
import hdd from './HeaderDropdown.scss'

function HeaderDropdown() {
    return (
        <Dropdown>
            <div className="dropdown">
                <button className="dropbtn">Option 2</button>
                <div className="dropdown-content">
                    <ul>
                        <li>Action</li>
                        <li>Action</li>
                        <li>Action</li>
                    </ul>
                </div>
            </div>
        </Dropdown>
    );
}

export default HeaderDropdown;