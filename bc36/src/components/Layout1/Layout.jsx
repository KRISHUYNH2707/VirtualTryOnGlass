import React, { Component } from "react";
import Glasses from "./Glasses";
// import Model from "./Model";

export default class Layout extends Component {
    render() {
        return (
            <div>
                <div className="container vglasses py-3">
                    <div className="row  justify-content-between">
                        <Glasses></Glasses>
                    </div>
                </div>
            </div>
        );
    }
}
