import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar'


const Layout = (props) => {

    return ( 
        <>
            <div className="app">
                <Sidebar />
                {/* <Header /> */}
                <main>
                    {props.children}
                </main>
            </div>
        </>
     );
}
 
export default Layout;