import './App.css';
import Logo from "./components/logo/logo";
import Menu from "./components/menu/menu";
import Title from "./components/title/title";
import Paragraph from "./components/paragraph/paragraph";
import Button from "./components/button/button";



function App() {
  return (
    <div className="App">
      <nav className="nav">
        <Logo />
        <Menu />
      </nav>

      <div className="content">
        <Title text="IMAGINE A PLACE..." />
        <Paragraph text="...where you can belong to a school club, a gaming group, or a
        worldwide art community. Where just you and a handful of
        friends can spend time together. A place that makes it easy to 
        talk every day and hang out more often."/>
        <div className="buttons-container">
          <Button type="Download" text="Download for Mac" />
          <Button type="Open" text="Open Discord in your browser" />
        </div>
      </div>
      <img src="/src/assets/discord-background.png" className="discord-bckg"></img>
    </div>
  );
}

export default App;
