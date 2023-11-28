const Root = () =>{
    return (
      <>
        <div id="sidebar">
          <h1>React Router example</h1>
          <nav>
            <ul>
              <li>
                <a href={`/login`}>Login</a>
              </li>
              <li>
                <a href={`/register`}>Register</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail"></div>
      </>
    );
  }

export default Root