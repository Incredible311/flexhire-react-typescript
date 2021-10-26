import React, {useState, useCallback} from 'react'
import { Avatar, Menu, MenuItem } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import "../assests/styles/header.css"


export default function Header() {
    const history = useHistory();

    const [menu, setMenu] = useState(null)

    const handleMenuOpen = useCallback((event) => {
        setMenu(event.currentTarget)
    }, [setMenu])

    const handleMenuClose = useCallback(() => {
        setMenu(null)
    }, [setMenu])

    const handleRoute = useCallback((path: string) => {
        history.push(path)
    }, [history])

    return (
        <div className="header-container">
            <div className="logo" onClick={() => handleRoute("/")}>
                <h2>Flexhire</h2>
            </div>
            <div className="user-avatar-view">
                <Avatar alt="Remy Sharp" className="avatar-image" onClick={handleMenuOpen} />
                <Menu
                    className="user-avatar-menu"
                    id="simple-menu"
                    anchorEl={menu}
                    open={Boolean(menu)}
                    onClose={handleMenuClose}
                >
                    <MenuItem onClick={() => handleRoute("/profile")}>Profile</MenuItem>
                    <MenuItem onClick={() => handleRoute("/login")}>Logout</MenuItem>
                </Menu>
            </div>
        </div>
    )
}