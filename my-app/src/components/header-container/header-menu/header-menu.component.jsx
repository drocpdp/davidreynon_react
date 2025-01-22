import React from "react"
import './header-menu.styles.scss'

const HeaderMenuComponent = () => {
    return (
        <div class='top-menu'>
            <a class='top-title-href' href="" >About Me</a>  |  
            <a class='top-title-href' href="https://linkedin.com/in/daveqa" target="_blank"> LinkedIn</a>  |  
            <a class='top-title-href' href="https://github.com/drocpdp" target="_blank"> Github</a>  |  
            <a class='top-title-href' href="https://bitbucket.com/drocpdp" target="_blank"> Bitbucket</a>
        </div>
    )
}

export default HeaderMenuComponent;