import React, { Component } from "react";

export default class GlassDetails extends Component {
    render() {
        console.log(this.props.glassDetails)
        return (
            <div>
                <h2>
                Name: {this.props.glassDetails.name}
                </h2>
                <div className="d-flex">
                    <div className="price mr-3">
                        <h3>
                        Price: {this.props.glassDetails.price}$
                        </h3>
                    </div>
                </div>
                <p>
                    {this.props.glassDetails.desc}
                </p>
            </div>
        );
    }
}
