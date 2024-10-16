import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // State to track login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (

    <div className="container">
      <h1> Login-Logout React program</h1>
      <div className="card mt-5">
        <div className="card-header bg-primary text-white fs-5 d-flex justify-content-between">
          <div>Navigation</div>
          <div>
            {!isLoggedIn ? (
              <button className="btn btn-light" onClick={handleLogin}>
                Login
              </button>
            ) : (
              <button className="btn btn-light" onClick={handleLogout}>
                Logout
              </button>
            )}
          </div>
        </div>

        <div className="card-body">
          {isLoggedIn ? (
            <div className="text-center">
              <h3>Private Views</h3>
              <p>Welcome to the private section of the website!</p>
            </div>
          ) : (
            <div className="text-center">
              <h3>Public Views</h3>
              <p>Please log in to see private content.</p>
            </div>
          )}
        </div>

        <div className="card-footer text-center bg-primary text-white">
          <h5>Footer</h5>
        </div>
      </div>
    </div>
  );
}
export default App;





