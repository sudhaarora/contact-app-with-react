import React from 'react';
import reactDom from 'react-dom';

class AddContact extends React.Component {
    state = {
        name: "",
        email: ""
    }
    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" && this.state.email === ""){
            alert("All the fields are mandatory!!");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"", email:""});
    }
    
    render() {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text"
                            name="name"
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })}
                            placeholder="Name" />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text"
                            name="email"
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })}
                            placeholder="Email" />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        )
    }
}


export default AddContact;