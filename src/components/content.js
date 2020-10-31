import React from 'react';

export class Content extends React.Component {

    render() {
        return ( // these elements will be brought into the app.js class
            <div> 
                <h1>Hello world!</h1> 
                <h2>It is {new Date().toLocaleTimeString()}.</h2> 
            </div>
        );


    }
}