import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";

class Form extends Component {
    render () {
        return(
            <form>
                <label>
                    Location:
                    <input 
                        name="Location"
                        type="text" />
                </label>
                <br />
                <label>
                    Things to do:
                    <input 
                        name="Things to do"
                        type="text" />
                </label>
            </form>
        );
    }
}

default export Form;