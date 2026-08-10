import axios from "axios";

const App = () => {
  async function fetchData() {
    let response = await axios.get("https://picsum.photos/v2/list?page=2&limit=100");
    console.log(response);
  }
  return (
    <button onClick={fetchData}>Click me</button>
  )
}

export default App