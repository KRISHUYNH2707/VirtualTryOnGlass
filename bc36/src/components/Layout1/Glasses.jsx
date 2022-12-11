import React, { Component } from "react";
import data from "../../data/dataGlasses.json";
import GlassDetails from "../GlassDetails";
import styleModule from "./style.module.css";

export default class Glasses extends Component {
    state = {
        imageUrl: "",
        isVisible: "visible",
        glassDetails: [],
        inforVisible: 'hidden'
    };

    tryGlass = (id) => {
        console.log(id)
        const idx = data.findIndex(element => element.id === id);
        
        console.log(idx)

        const newState = {
            imageUrl: `./images/glasses/v${id}.png`,
            isVisible: "visible",
            glassDetails: data[idx],
            inforVisible: 'visible',
        };
        this.setState(newState);
    };

    renderGlassList = () => {
        return data.map((element) => {
            return (
                <>
                    <img
                        // onClick={() => this.tryGlass(`${element.id}`)}
                        onClick={() => this.tryGlass(element.id)}
                        className="img-fluid col-4 vglasses__items my-5"
                        src={element.url}
                        alt="glass"
                    />
                </>
            );
        },"");
    };

    removeGlasses = (boolean) => {
        if (boolean) {
            this.setState({
                isVisible: "hidden",
            });
        } else {
            this.setState({
                isVisible: "visible",
            });
        }
    };

    render() {
        return (
            <>
                <div className="col-6 vglasses__left">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="mb-2">Virtual Glasses</h1>
                        </div>
                    </div>
                    <div className="row mt-5" id="vglassesList">
                        {this.renderGlassList()}
                    </div>
                </div>

                <div className="col-5 vglasses__right p-0">
                    <div className="vglasses__card">
                        <div className="mb-2 text-right mt-2 mr-2">
                            <button
                                className="btn btn-warning compared_button1"
                                onClick={() => this.removeGlasses(true)}
                            >
                                Before
                            </button>
                            <button
                                className="btn btn-warning compared_button2"
                                onClick={() => this.removeGlasses(false)}
                            >
                                After
                            </button>
                        </div>
                        <div className="vglasses__model" id="avatar">
                            <img
                                className={`${styleModule["model-img"]}`}
                                src="./images/glasses/model.jpg"
                                alt=""
                            />
                            <img
                                style={{ visibility: `${this.state.isVisible}` }}
                                src={this.state.imageUrl}
                                className={`${styleModule["virtual-glass"]} ${this.state.isVisible}`}
                                alt=""
                            />
                        </div>
                        <div style={{visibility: this.state.inforVisible}} id="glassesInfo" className={`${styleModule['vglasses__info']}`}>
                            <GlassDetails glassDetails={this.state.glassDetails} ></GlassDetails>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
