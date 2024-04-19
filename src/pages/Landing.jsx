import { useLocation } from "react-router-dom";
import Header from "../components/Header.jsx"
import Card from "../components/Card.jsx"
import Todocontainer from "../components/TodoContainer.jsx";
function Landing() {
  const data = useLocation();

return (
    <div className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <Header username={data.state.user} />

        <div className="flex justify-between gap-7 my-5 flex-wrap">
          <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
          <Card bgcolor={"#FD6663"} title={"December"} subtitle={"14:03:34"} />
          <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"} />
        </div>

        <Todocontainer />
      </div>
    </div>
  );
}

export default Landing;
