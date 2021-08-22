import "./styles.css";
import Name from "./components/Name";
import Title from "./components/Title";
import Panel from "./components/Panel";
import Flame from "./components/Flame";
import Coding from "./components/Coding";
import Space from "./components/Space";
import Glitch from "./components/Glitch";
import Avatars from "./components/Avatars";

const avatar1 =
  "https://media-exp1.licdn.com/dms/image/C4D03AQE2ac0dbwj6uA/profile-displayphoto-shrink_800_800/0/1602703300303?e=1634774400&v=beta&t=Mkv5pcM8HDf2ZLBQVC-k8U7hPR0mc8YpEFrc5-ZNUBo";
const avatar2 =
  "https://pps.whatsapp.net/v/t61.24694-24/102711872_3608419252506715_7162492799894223158_n.jpg?ccb=11-4&oh=9744065ef9ed6077c8b13c5358a9ad3b&oe=61256932";

export default function App() {
  return (
    <div className="App">
      {/*<header className="header">Header</header>*/}

      <Panel />
      <Avatars />
      <Name />
      <Glitch />
      <Coding />
      <Space />
      <Flame />

      {/*<aside className="aside aside-1">Aside 1</aside>
      <aside className="aside aside-2">Aside 2</aside>
        <footer className="footer">Footer</footer>*/}
    </div>
  );
}
