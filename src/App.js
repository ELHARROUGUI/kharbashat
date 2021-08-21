import "./styles.css";
import Name from "./components/Name";
import Title from "./components/Title";

const avatar1 =
  "https://media-exp1.licdn.com/dms/image/C4D03AQE2ac0dbwj6uA/profile-displayphoto-shrink_800_800/0/1602703300303?e=1634774400&v=beta&t=Mkv5pcM8HDf2ZLBQVC-k8U7hPR0mc8YpEFrc5-ZNUBo";
const avatar2 =
  "https://pps.whatsapp.net/v/t61.24694-24/102711872_3608419252506715_7162492799894223158_n.jpg?ccb=11-4&oh=9744065ef9ed6077c8b13c5358a9ad3b&oe=61256932";

export default function App() {
  return (
    <div className="App">
      <header className="header">Header</header>
      <article className="main">
        <Name />
        <Title />
        <img
          style={{
            borderRadius: "50%",
            minHeight: "10px",
            maxHeight: "100px"
          }}
          src={avatar1}
          alt="Me"
        />
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
          egestas semper. Aenean ultricies mi vitae est. Mauris placerat
          eleifend leo.
        </p>
      </article>
      <aside className="aside aside-1">Aside 1</aside>
      <aside className="aside aside-2">Aside 2</aside>
      <footer className="footer">Footer</footer>
    </div>
  );
}
