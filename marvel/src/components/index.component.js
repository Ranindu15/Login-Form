import React, {Component} from 'react';
import axios from 'axios';
import TableRow from './table.row';

class IndexComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {business: []};
  }

  componentDidMount() {
    axios.get('http://localhost:4000/business')
        .then(response =>{
          this.setState({business: response.data});
        })
        .catch(function (error) {
          console.log(error);
        })
  }

  tabRow(){
    return this.state.business.map(function (object, i) {
      return <TableRow obj={object} key={i}/>;
    });
  }
  render() {
        return (
            <div>
              <h3 align={"center"}> Heroes List</h3>
              <table className="table table-striped" style ={{marginTop:20}}>
                  <thead>
                    <tr>
                      <th> Hero </th>
                      <th> Planet </th>
                      <th> Power </th>
                      <th colSpan={2}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {this.tabRow()}
                  </tbody>
              </table>
            </div>
        );
    }
}

export default IndexComponent;
