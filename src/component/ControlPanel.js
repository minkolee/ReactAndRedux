import React from "react";

import Counter from "./Counter";

class ControlPanel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {

        return (
            <div>
                <Counter caption='First'/>
                <Counter caption='Second'/>
                <Counter caption='Third'/>
                
            </div>
        )
    }


}


export default ControlPanel;