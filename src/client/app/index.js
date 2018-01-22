import React from 'react';
import ReactDOM from 'react-dom';
import TextField from './components/Textfield.js';
import RadioField from './components/radiofield.js';
import SelectBox from './components/selectbox.js';
import DOB from './components/dob.js';
import Button from './components/button.js';
//import Options from './components/options.js';
import styles from './style.css';

class Form extends React.Component {
  render() {
    return (
      <div>

        <TextField
          placeholderStr='firstName'
          maxTextLength={20}
          classnameStr1='form-group'
          classnameStr2='form-control'
          suffix='MR'/>
        <TextField
          placeholderStr='MiddleName'
          maxTextLength={20}
          classnameStr1='form-group'
          classnameStr2='form-control'
          suffix='MR'/>
        <TextField
          placeholderStr='LastName'
          maxTextLength={20}
          classnameStr1='form-group'
          classnameStr2='form-control'/>
        <RadioField
          name='optradio'
          labelStr1='male'
          labelStr2='female'
          labelStr3='other'
          classnameStr1='radioid'
          classnameStr2='radio-inline'/>
        <TextField
          placeholderStr='AddressLine1'
          TextFieldclassnameStr1='form-group'
          TextFieldclassnameStr2='form-control'/>
        <TextField
          placeholderStr='AddressLine2'
          TextFieldclassnameStr1='form-group'
          TextFieldclassnameStr2='form-control'/>
        <SelectBox
          classnameStr1='form-group'
          classnameStr2='col-sm-10'
          classnameStr3='form-control'
          fieldId1='selectid'
          fieldId2='state'/>
        <TextField
          placeholderStr='mobile'
          TextFieldclassnameStr1='form-group'
          TextFieldclassnameStr2='form-control'/>
        <DOB
          classnameStr1='form-group'
          classnameStr2='form-control'
          isStr='exampleInputDOB1'
          placeholderStr='Date of Birth'/>
        <Button name='submit' classnameStr="btn btn-success"/>

      </div>
    )
  }
}
ReactDOM.render(
  <Form/>, document.getElementById("app"));
