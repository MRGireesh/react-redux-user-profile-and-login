import "./App.css";
import { Login } from "./components/Login/Login";
import { Profile } from "./components/Profile/Profile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile />
        <Login />
      </header>
    </div>
  );
}

export default App;
