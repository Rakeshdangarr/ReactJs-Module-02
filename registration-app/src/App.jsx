import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginModal: false,
      showRegModal: false,
      email: '',
      password: '',
      username: '',
    };
  }

  toggleLoginModal = () => {
    this.setState(prevState => ({ showLoginModal: !prevState.showLoginModal }));
  };

  toggleRegModal = () => {
    this.setState(prevState => ({ showRegModal: !prevState.showRegModal }));
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(this.state);
  };

  render() {
    return (
      <div className="main_container">
        <div className="container">
          <h2>Modal Login Form</h2>
          <button type="button" className="btn btn-primary" onClick={this.toggleLoginModal}>
            Open modal
          </button>

          <br />
          <br />

          <h2>Modal Registration Form</h2>
          <button type="button" className="btn btn-primary" onClick={this.toggleRegModal}>
            Open modal
          </button>

          {/* Registration Modal */}
          {this.state.showRegModal && (
            <div className="modal fade show" style={{ display: "block" }} onClick={this.toggleRegModal}>
              <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
                <div className="modal-content">
                  <div className="modal-body">
                    <h5 className="modal-title text-center">CREATE AN ACCOUNT</h5>
                    <button type="button" className="close" onClick={this.toggleRegModal}>
                      <span><i className="fa fa-times-circle" aria-hidden="true"></i></span>
                    </button>

                    <form onSubmit={this.handleSubmit}>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="User Name" name="username" required value={this.state.username} onChange={this.handleInputChange} />
                  
                      </div>
                      <div className="form-group">
                        <input type="email" placeholder="Email address" className="form-control" name="email" required value={this.state.email} onChange={this.handleInputChange} />
                        
                      </div>
                      <div className="form-group">
                        <select className="form-control" name="profession" required>
                          <option value="">Select profession</option>
                          <option>Students</option>
                          <option>Research Scholar</option>
                          <option>Professor</option>
                          <option>Others</option>
                        </select>
                      
                      </div>
                      {/* Add other fields as needed */}
                      <div className="text-center">
                        <button type="submit" className="btn btn-primary">SIGN UP</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Login Modal */}
          {this.state.showLoginModal && (
            <div className="modal fade show" style={{ display: "block" }} onClick={this.toggleLoginModal}>
              <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
                <div className="modal-content">
                  <div className="modal-body">
                    <h5 className="modal-title text-center">LOGIN TO MY ACCOUNT</h5>
                    <button type="button" className="close" onClick={this.toggleLoginModal}>
                      <span><i className="fa fa-times-circle" aria-hidden="true"></i></span>
                    </button>

                    <form onSubmit={this.handleSubmit}>
                      <div className="form-group">
                        <input type="email" className="form-control" name="email" placeholder="Email address" required value={this.state.email} onChange={this.handleInputChange} />
                      
                      </div>
                      <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" name="password" required value={this.state.password} onChange={this.handleInputChange} />
  
                      </div>
                      <div className="text-center">
                        <button type="submit" className="btn btn-primary">LOGIN</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
