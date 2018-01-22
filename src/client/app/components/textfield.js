import React from 'React';
import PropTypes from 'prop-types';
class TextField extends React.Component {

    render() {
        let minTextLength = (this.props.minTextLength
            ? this.props.maxTextLength
            : 1);
        let maxTextLength = (this.props.maxTextLength
            ? this.props.maxTextLength
            : 15);
        let placeholderStr = (this.props.placeholderStr
            ? this.props.placeholderStr
            : 'Username');

        let classnameStr1 = (this.props.classnameStr1
            ? this.props.classnameStr1
            : 'form-group');
        let classnameStr2 = (this.props.classnameStr2
            ? this.props.classnameStr2
            : 'form-control');

        return (
            <div className={classnameStr1}>
                <input
                    type="text"
                    className={classnameStr2}
                    placeholder={placeholderStr}
                    minLength={minTextLength}
                    maxLength={maxTextLength}/>

            </div>

        );
    }
}
TextField.propTypes = {
    classnameStr1: React.PropTypes.string,
    classnameStr2: React.PropTypes.string,
    questions: React.PropTypes.string,
    label: React.PropTypes.string,
    prefix: React.PropTypes.string,
    suffix: React.PropTypes.string,
    hint: React.PropTypes.string,
    placeholderStr: React.PropTypes.string,
    visualWidth: React.PropTypes.number,
    maxTextLength: React.PropTypes.number,
    minTextLength: React.PropTypes.number
}
export default TextField;