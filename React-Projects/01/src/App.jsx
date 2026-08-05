import Card from "./Components/Card";

const App = () => {
  let arr = [
    { name: "1", img: "https://i.pinimg.com/1200x/50/6d/b3/506db390a2eeb6f0211a25bea07b7a7d.jpg" },
    { name: "2", img: "url" },
    { name: "3", img: "url" },
  ];
  return (
    <div className="parent">
      {arr.map((el,i) =>{
        return <Card key={i} name = {el.name} img = {el.img} />
      })}
    </div>
  );
};

export default App;
