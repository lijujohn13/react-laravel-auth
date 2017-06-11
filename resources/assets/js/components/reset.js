import React, { Component } from 'react'
import Nav from './navbar'
import axios from 'axios'


const BASE_URL = 'http://localhost';

class Reset extends Component{

 	constructor(props){
        super(props);
        this.state = {
        	token: props.match.params.token,
            email : '',
            password: '',
            password_confirmation: '',
        }
    }

    onSubmit(e){
        e.preventDefault();
        const url = BASE_URL+'/api/password/reset' ;
        const {token, email, password, password_confirmation} = this.state ;
        axios.post(url, {
	    	token,
	        email,
	        password,
	        password_confirmation
          })
          .then(response=> {
            this.setState({err: false});
            this.props.history.push('login') ;
          })
          .catch(error=> {
          	this.refs.password.value="";
            this.refs.email.value="";
            this.refs.confirm.value="";
            this.setState({err: true});
          });
     }

    onChange(e){
     	const {name, value} = e.target;
        this.setState({[name]: value});
     }


	render(){	

		let error = this.state.err ;
        let msg = (!error) ? 'Password Successfully reset' : 'Oops! , Something went wrong' ;
        let name = (!error) ? 'alert alert-success' : 'alert alert-danger' ;
		return(
			<div>
			    <Nav />
			    <div className="container">
			        <div className="row">
			            <div className="col-md-8 col-md-offset-2">
			                <div className="panel panel-default">
			                    <div className="panel-heading">Reset Password</div>
			                    <div className="panel-body">
			                    	<div className="col-md-offset-2 col-md-8 col-md-offset-2">
                                        {error != undefined && <div className={name} role="alert">{msg}</div>}
                                    </div>  
			                        <form className="form-horizontal" role="form"  onSubmit= {this.onSubmit.bind(this)}>
			                            <div className="form-group">
			                                <label for="email" className="col-md-4 control-label">E-Mail Address</label>

			                                <div className="col-md-6">
			                                    <input id="email" type="email" className="form-control" ref="email" name="email" onChange={this.onChange.bind(this)} required autofocus />
			                                </div>
			                            </div>

			                            <div className="form-group">
			                                <label for="password" className="col-md-4 control-label">Password</label>

			                                <div className="col-md-6">
			                                    <input id="password" type="password" className="form-control" ref="password" name="password" onChange={this.onChange.bind(this)} required />
			                                </div>
			                            </div>

			                            <div className="form-group">
			                                <label for="password-confirm" className="col-md-4 control-label">Confirm Password</label>
			                                <div className="col-md-6">
			                                    <input id="password-confirm" type="password" className="form-control" ref="confirm" name="password_confirmation"onChange={this.onChange.bind(this)}  required />
			                                </div>
			                            </div>

			                            <div className="form-group">
			                                <div className="col-md-6 col-md-offset-4">
			                                    <button type="submit" className="btn btn-primary">
			                                        Reset Password
			                                    </button>
			                                </div>
			                            </div>
			                        </form>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>

			)
		}
}

export default Reset