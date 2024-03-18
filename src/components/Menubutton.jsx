import  { useState } from 'react';
import Menus from './menus.jsx';

function Menubutton() {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <div>
            <button onClick={toggleMenu} className = " menu-button">Menu Button</button>
            {menuVisible && <Menus />}
        </div>
    );
};

export default Menubutton;
