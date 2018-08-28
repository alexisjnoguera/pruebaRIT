import React from 'react';

export default class Frame extends React.Component {

    render() {
        return (
            <div className="frame col-6">
                {this.props.texto}
            </div>
        );
    }
}