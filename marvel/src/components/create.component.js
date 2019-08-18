import React,{Component} from 'react';
import axios from 'axios';

export default class Create extends Component{

  constructor(props){
    super(props);
    this.onChangeHeroName = this.onChangeHeroName.bind(this);
    this.onChangeHeroPlanet = this.onChangeHeroPlanet.bind(this);
    this.onChangeHeroPower = this.onChangeHeroPower.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Hero_Name: '',
      Hero_Planet:'',
      Hero_Power:''
    }
  }
    onChangeHeroName(e){
      this.setState({
        Hero_Name : e.target.value
      })
    }
    onChangeHeroPlanet(e){
      this.setState({
        Hero_Planet : e.target.value
      })
    }
    onChangeHeroPower(e){
      this.setState({
        Hero_Power : e.target.value
      })
    }
    onSubmit(e) {
      e.preventDefault();
      const obj = {
        Hero_Name: this.state.Hero_Name,
        Hero_Planet: this.state.Hero_Planet,
        Hero_Power: this.state.Hero_Power
      };
      axios.post('http://localhost:4000/business/add', obj).then(res => console.log(res.data));

      this.setState({
        Hero_Name: '',
        Hero_Planet: '',
        Hero_Power: ''
      });

    }

  render(){
    return (
      <div style={{marginTop: 10}}>
        <h1>Add New Hero</h1>
        <form onSubmit={this.onSubmit}>

          <div className="form-group">
            <label>Add Hero Name </label>
            <input type="text" className="form-control"
                value={this.state.Hero_Name}
                onChange={this.onChangeHeroName}
               />
          </div>

          <div className="form-group">
            <label>Add Hero Planet </label>
            <input type="text" className="form-control"
                value={this.state.Hero_Planet}
                onChange={this.onChangeHeroPlanet}
              />
          </div>

          <div className="form-group">
            <label>Add Hero'z Power </label>
            <input type="text" className="form-control"
                value={this.state.Hero_Power}
                onChange={this.onChangeHeroPower}
              />
          </div>

          <div className="form-group">
            <input type="submit" value="Register Hero"  className="btn btn-primary"/>
          </div>

        </form>
      </div>
    );
  }
}
