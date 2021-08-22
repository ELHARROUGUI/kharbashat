import "./style.scss";

const avatar1 =
  "https://media-exp1.licdn.com/dms/image/C4D03AQE2ac0dbwj6uA/profile-displayphoto-shrink_800_800/0/1602703300303?e=1634774400&v=beta&t=Mkv5pcM8HDf2ZLBQVC-k8U7hPR0mc8YpEFrc5-ZNUBo";
const avatar2 =
  "https://pps.whatsapp.net/v/t61.24694-24/102711872_3608419252506715_7162492799894223158_n.jpg?ccb=11-4&oh=9744065ef9ed6077c8b13c5358a9ad3b&oe=61256932";
const avatar3 = "https://c.tenor.com/T9lxlTwR_JIAAAAC/tv-static.gif";
const avatar4 = "https://c.tenor.com/YG_GREUD9OwAAAAC/tv-static.gif";

const Avatars = () => (
  <div className="avatars">
    <img src={avatar3} alt="Me1" />
    <img src={avatar1} alt="Me2" />
    <img src={avatar4} alt="Me3" />
    <img src={avatar2} alt="Me4" />
  </div>
);

export default Avatars;
