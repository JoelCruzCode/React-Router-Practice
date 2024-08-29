import { Link } from 'react-router-dom';
import './App.css'

const App = () => {
  return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
            <Link to='profile/someIncorrectValueToBeHandledByProfileRenderLogic'>Default?</Link>
            <br></br>
            <Link to="profile/popeye">Popeye</Link>
            <br></br>
            <Link to="profile/spinach">Spinach</Link>

          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;