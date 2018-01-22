import React from 'React';
import PropTypes from 'prop-types';
class RadioField extends React.Component {
    render() {
        let nameStr = (this.props.name
            ? this.props.name
            : 'radio');
        let labelStr1 = (this.props.labelStr1
            ? this.props.labelStr1
            : 'male');
        let labelStr2 = (this.props.labelStr2
            ? this.props.labelStr2
            : 'female');
        let labelStr3 = (this.props.labelStr3
            ? this.props.labelStr3
            : 'other');
        let classnameStr1 = (this.props.classnameStr1
            ? this.props.classnameStr1
            : 'radioid');
        let classnameStr2 = (this.props.classnameStr2
            ? this.props.classnameStr2
            : 'radio-inline');

        return (
            <div className={classnameStr1}>
                <div className={classnameStr2}>

                    <label><input type="radio" name={nameStr}/>{labelStr1}</label>
                </div>
                <div className={classnameStr2}>
                    <label><input type="radio" name={nameStr}/>{labelStr2}</label>
                </div>
                <div className={classnameStr2}>
                    <label><input type="radio" name={nameStr}/>{labelStr3}</label>
                </div>
            </div>
        );
    }
}
RadioField.protoTypes = {
    classnameStr1: React.PropTypes.string.isRequired,
    classnameStr2: React.PropTypes.string.isRequired,
    nameStr: React.PropTypes.string,
    labelStr1: React.PropTypes.string,
    labelStr2: React.PropTypes.string,
    labelStr3: React.PropTypes.string

}
export default RadioField;