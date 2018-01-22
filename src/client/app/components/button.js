import React from 'React';
import PropTypes from 'prop-types';
class Button extends React.Component {
    render() {
        let classnameStr = (this.props.classnameStr
            ? this.props.classnameStr
            : "btn btn-success");
        return (
            <div>
                <button type="button" className={classnameStr}>{this.props.name}</button>
            </div>
        )
    }
}
Button.propTypes = {

    classnameStr: React.PropTypes.string.isRequired
}
export default Button;