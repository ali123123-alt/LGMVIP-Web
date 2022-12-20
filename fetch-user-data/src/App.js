import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setdata] = useState([]);
  const [length, setlength] = useState([0]);
  const [url,seturl]=useState("");
  const [text,settext]=useState("");
  const [isloading,setloading]=useState(false);

  const fetchData = () => {
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setdata(data);
        setlength(data.data.length);
        seturl(data["support"]["url"]);
        settext(data["support"]["text"]);
        console.log(url);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  const handleclick=(e)=>{
    e.preventDefault();
    setloading(true);
  }
  return (
    <div className="container">
      <div className="navbar">
        <h2>Lets Grow More</h2>
        <button onClick={handleclick}>Get data</button>
      </div>
      {isloading===true && (
      <div id="output">
        <h3>page: {data.page}</h3>
        <h3>per page: {data.per_page}</h3>
        <h3>total: {data.total}</h3>
        <h3>total pages: {data.total_pages}</h3>
        <h3>users data</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Avatar</th>
            </tr>
          </thead>
          {length > 0 && (
            <tbody>
              {data.data.map((users) => (
                <tr>
                  <td key={users.id}>{users.id}</td>
                  <td key={users.first_name}>{users.first_name}</td>
                  <td key={users.last_name}>{users.last_name}</td>
                  <td key={users.email}>{users.email}</td>
                  <td key={users.avatar}><img src={users.avatar} alt="" srcset="" /></td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
        <h3>Support Url: {url}</h3>
        <h3>Support Text: {text}</h3>
      </div>
      )}
    </div>
  );
}

export default App;
