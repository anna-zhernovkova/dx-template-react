import React, { Component } from 'react';
import './App.css';

import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.compact.css";

import { Template } from "devextreme-react/core/template";

import { SlideOutView } from "devextreme-react/ui/slide-out-view";

import renderMenuTemplate from "./renderMenuTemplate"

function renderViewTemplate() {
    return (
        <React.Fragment>
            <p>View content</p>
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
                menuRender={renderMenuTemplate.bind(this)}
                contentRender={renderViewTemplate}
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
