import ProjectProfile from "./components/profiles";
import styles from './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <br/>
        <ProjectProfile className={styles.profile}
            id={"1"}
        />
      </header>
    </div>
  );
}

export default App;
