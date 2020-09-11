import React from 'react'
import { Link } from 'react-router-dom'

import './Sidebar.scss'

const Sidebar = ( {claseLinkOne, claseLinkTwo} ) => {
    return ( 
        <>
            <aside className="sidebar">
                <div className="logo">
                    <h3>
                        <span>Dev</span>
                        challenges.io
                    </h3>
                </div>
                <nav className='navegation'>
                    <div>
                        <Link to='/' className={claseLinkOne}>
                            Buttons
                        </Link>
                    </div>
                    <div>
                        <Link to='/PageInput' className={claseLinkTwo}>
                            Inputs
                        </Link>
                    </div>
                </nav>
            </aside>
        </>
     );
}
 
export default Sidebar;