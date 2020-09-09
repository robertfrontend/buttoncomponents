import React from 'react'

import './Sidebar.scss'

const Sidebar = () => {
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
                        <a href="#!">
                            Colors
                        </a>
                    </div>
                    <div>
                        <a href="#!">
                            Typography
                        </a>
                    </div>
                    <div>
                        <a href="#!">
                            Spaces
                        </a>
                    </div>
                    <div>
                        <a href="#!">
                            Buttons
                        </a>
                    </div>
                    <div>
                        <a href="#!" className='activo'>
                            Inputs
                        </a>
                    </div>
                    <div> 
                        <a href="#!">
                            Grid
                        </a>
                    </div>
                </nav>
            </aside>
        </>
     );
}
 
export default Sidebar;