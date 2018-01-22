import React from 'React';
// import PropTypes from 'prop-types';
class DOB extends React.Component {
    render() {
        let classnameStr1 = (this.props.classnameStr1
            ? this.props.classnameStr1
            : "form-group");
        let classnameStr2 = (this.props.classnameStr2
            ? this.props.classnameStr2
            : "form-control");

        let idStr = (this.props.idStr
            ? this.props.idStr
            : "exampleInputDOB1");
        let placeholderStr = (this.props.placeholderStr
            ? this.props.placeholderStr
            : "Date of Birth");
        return (
            <div>

                <div className={classnameStr1}>
                    <label>Date of Birth</label>
                    <input
                        type="date"
                        className={classnameStr2}
                        id={idStr}
                        placeholder={placeholderStr}/>
                </div>

            </div>
        );
    }
}
DOB.propTypes = {

    classnameStr1: React.PropTypes.string,
    classnameStr2: React.PropTypes.string,
    idStr: React.PropTypes.string,
    placeholderStr: React.PropTypes.string
}
export default DOB;