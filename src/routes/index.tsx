import { Link } from "react-router-dom";

const Root = () =>{
    return (
      <>
        <div id="sidebar">
          <h1>React Router example</h1>
          <nav>
            <ul>
              <li>
                <Link to={'/login'}>Login</Link>
              </li>
              <li>
                <Link to={'/register'}>Register</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail"></div>
      </>
    );
  }

export default Root