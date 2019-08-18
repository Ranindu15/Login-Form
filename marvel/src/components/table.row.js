import React, {Component} from 'react';
import {Link} from "react-router-dom";

class TableRow extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.Hero_Name}
                </td>

                <td>
                    {this.props.obj.Hero_Planet}
                </td>

                <td>
                    {this.props.obj.Hero_Power}
                </td>

                <td>
                    <Link to={"/edit/"+ this.props.obj._id} className="btn btn-primary"> Edit </Link>
                </td>

                <td>
                    <button className="btn-primary"> Delete </button>
                </td>

            </tr>
        );
    }
}

export default TableRow;
