import React, { Component } from 'react';
import './WhoAmI.css';

class WhoAmI extends Component {
    render() {
        return (
            <div className="who">
                <div className="row">
                    <div className="col-md-4 who-img">

                    </div>
                    <div className="col-md who-text">
                        <p className="wow slideInRight">
                            <span className="text-primary">Name: </span>
                            {this.props.name}
                        </p>
                        <p className="wow slideInRight">
                            <span className="text-primary">Email: </span>
                            {this.props.email}
                        </p>
                        <p className="wow slideInRight">
                            <span className="text-primary">Mobile: </span>
                            {this.props.tel}
                        </p>
                        <p className="wow slideInRight">
                            <span className="text-primary">Address: </span>
                            {this.props.address}
                        </p>
                        <hr />
                        <p className="text-muted wow slideInRight">
                            {this.props.description}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default WhoAmI;
