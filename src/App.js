import React, { Component } from 'react';
import './App.css';

import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.compact.css";

import { Template } from "devextreme-react/core/template";

import { SlideOutView } from "devextreme-react/ui/slide-out-view";
import { Toolbar } from "devextreme-react/ui/toolbar";
import { TreeView } from "devextreme-react/ui/tree-view";

function renderViewTamplate() {
    return (
        <React.Fragment>
            <p>View content</p>
        </React.Fragment>
    );
}
function renderMenuTamplate() {
    const items = [{ 
        location: "before",
        widget: "dxButton",
        locateInMenu: "auto",
        options: {
            icon: 'menu',
            onClick: this.showMenu
        }
    }, {
        location: "center",
        locateInMenu: "auto",
        template: "itemTemplate"
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
                <Template name="itemTemplate" render={() => <h4>Demo</h4>}/>
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

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuVisible: true
        };
        this.clickOnMenuButton = this.clickOnMenuButton.bind(this);
        this.showMenu = this.showMenu.bind(this);
    }

    render() {
        return (
        <div className="App">
            <SlideOutView class="slide-layout"
                swipeEnabled={true}
                menuVisible={this.state.menuVisible}
                menuRender={renderMenuTamplate}
                contentRender={renderViewTamplate}
                onOptionChanged={(args) => args.name === "menuVisible" && this.setState({ menuVisible: args.value })}
            ></SlideOutView>
        </div>
        );
    }
    clickOnMenuButton(value) {
        this.setState({ menuVisible: !value });
    }  
    showMenu() {
        this.clickOnMenuButton(this.state.menuVisible);
    }
    onItemSelectionChanged(event) {
        // navigation
    }
}

export default App;
