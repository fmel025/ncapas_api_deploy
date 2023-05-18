import { NavLink } from "react-router-dom"

const Navbar = () => {

    const activeStyle = 'underline underline-offset-4'


    return(
        <nav className="flex justify-between items-center fixed w-full z-10 top-0">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                   <NavLink to='/' 
                   >
                   Shopi
                   </NavLink> 
                </li>
                <li>
                   <NavLink to='/'
                   className={({ isActive }) =>
                   isActive ? activeStyle : undefined
                   }>
                   All
                   </NavLink> 
                </li>
                <li>
                   <NavLink to='/clothes'
                   className={({ isActive }) =>
                   isActive ? activeStyle : undefined
                   }>
                   Clothes
                   </NavLink> 
                </li>
                <li>
                   <NavLink to='/electronics'
                   className={({ isActive }) =>
                   isActive ? activeStyle : undefined
                   }>
                   Electronics
                   </NavLink> 
                </li>
                <li>
                   <NavLink to='/furnitures'
                   className={({ isActive }) =>
                   isActive ? activeStyle : undefined
                   }>
                   Furnitures
                   </NavLink> 
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                   Correo@gmail.com
                </li>
                <li>
                   <NavLink to='/my-order'
                   className={({ isActive }) =>
                   isActive ? activeStyle : undefined
                   }>
                   My orders
                   </NavLink> 
                </li>
                <li>
                   <NavLink to='/my-account'
                   className={({ isActive }) =>
                   isActive ? activeStyle : undefined
                   }>
                   My account
                   </NavLink> 
                </li>
                <li>
                   <NavLink to='/sign_in'
                   className={({ isActive }) =>
                   isActive ? activeStyle : undefined
                   }>
                   Sign in
                   </NavLink> 
                </li>
            </ul>
        </nav>
    )
}

export default Navbar