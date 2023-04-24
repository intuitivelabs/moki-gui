import React, {
    Component
} from 'react';



class Report extends Component {
    constructor(props) {
        super(props);
        this.showError = this.showError.bind(this);
    }

    showError(value) {
        this.props.showError(value);
    }

    render() {
        return (
            <div className="container-fluid"  style={{"paddingRight": "0px"}}>
            </div>

        );
    }
}

export default Report;
