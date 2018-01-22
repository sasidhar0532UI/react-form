import React from 'react';
import ReactDOM from 'react-dom';
class Options extends React.Component {

    render() {
        function onclick() {
            const value1 = options.dateTime[0].time;
        }

        let options = {
            "dateTime": [
                {
                    "date": "27 - 07 - 2017",
                    "time": ["10", "11", "12"]
                }, {
                    "date": "29 - 07 - 2017",
                    "time": ["01", "13", "14"]
                }
            ]
        }
        return (
            <div>
                <div class="form-group">
                    <label for="exampleSelect1">Example select</label>
                    <select class="form-control" id="exampleSelect1">
                        <option>{options.dateTime[0].date}
                            onclick=onchange();</option>
                        <option>{options.dateTime[1].date}
                        </option>
                        <option></option>

                    </select>
                    <select class="form-control" id="exampleSelect1">
                        <option>{value1}</option>
                        <option>{value2}</option>
                        <option></option>

                    </select>
                </div>
            </div>
        )
    }
}
export default Options;