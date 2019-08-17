import React,{Component} from 'react';

export default class Create extends Component{
  render(){
    return (
      <div style={{marginTop: 10}}>
        <h1>Add New Hero</h1>
        <form>
          <div className="form-group">
            <label>Add Hero Name </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Add Hero Planet </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Add Hero'z Power </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <input type="submit" value="Register Hero"  className="btn btn-primary"/>
          </div>

        </form>
      </div>
    );
  }
}
