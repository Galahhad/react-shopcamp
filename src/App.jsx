import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.supreme}>
      <Header/>
      <MainContent/>
    </div>
  );
}

export default App;
