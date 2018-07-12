import React from 'react';

import { Template } from "devextreme-react/core/template";

import { Button } from "devextreme-react/ui/button";
import { Toolbar } from "devextreme-react/ui/toolbar";
import { TreeView } from "devextreme-react/ui/tree-view";

function renderMenuTemplate() {
    const items = [{ 
        location: "before",
        locateInMenu: "auto",
        widget: "dxButton",
        options: {
            icon: "menu",
            onClick: this.showMenu
        }
    }, {
        location: "center",
        // locateInMenu: "auto",
        template: "menuTextTemplate"
    }];
    const menuItems = [{ 
        text: "Home",
        expanded: true,
        icon: "home",
        items: [
            { text: "Profile", path: "profile" },
            { text: "Settings", path: "settings" }
        ]
    }, {
        text: "About",
        icon: "info",
        path: "about"
    }];

    return (
        <React.Fragment>
            <Toolbar items={items}>
                <Template name="menuTextTemplate" render={() => <h4>Demo</h4>}/>
            </Toolbar>
            <TreeView class="navigation-treeview" 
                items={menuItems}
                onItemClick={this.onItemSelectionChanged}
                selectByClick={true}
                selectionMode="single"
            ></TreeView>
        </React.Fragment>
    );
}

export default renderMenuTemplate;