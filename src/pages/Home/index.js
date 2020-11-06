import "./home.css";

// COMPONENTS
import Feed from "../../components/Feed";
import Widgets from "../../components/Widgets";

export default function Home() {
  return (
    <div className="home">
      <Feed />
      <Widgets />
    </div>
  );
}
