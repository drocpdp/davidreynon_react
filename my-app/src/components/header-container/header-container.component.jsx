import React from "react";
import HeaderMenuComponent from "./header-menu/header-menu.component";
import HeaderTitle from "./header-title/header-title.component";

import "./header-container.styles.scss";

const HeaderContainer = () => {
    return (
        <div class="top-container">
            <HeaderMenuComponent />
            <HeaderTitle />
        </div>
    )
}

export default HeaderContainer;