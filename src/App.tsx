import React from "react";
import logo from "./logo.svg";
import "./App.css";
import apiClient from "./api/apiClient";
import { useEffect, useState } from "react";
import { User } from "./types/User";

function App() {
  const [data, setData] = useState(Array<User>);
  useEffect(() => {
    apiClient
      .get("/users")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [PostUserEmail, setPostUserEmail] = useState("");
  const [PostUserFirstName, setPostUserFirstName] = useState("");
  const [PostUserLastName, setPostUserLastName] = useState("");
  const [PostUserClass, setPostUserClass] = useState("");
  const [putEmail, setPutEmail] = useState("");
  const [putEmailNew, setPutEmailNew] = useState("");
  const [putFirstNameNew, setPutFirstNameNew] = useState("");
  const [putLastNameNew, setPutLastNameNew] = useState("");
  const [putClassNew, setPutClassNew] = useState("");
  const [deleteUser, setDeleteUSer] = useState("")


  const submit = () => {
    const postUser = {
      email: PostUserEmail,
      firstName: PostUserFirstName,
      lastName: PostUserLastName,
      class: PostUserClass,
    } as User;

    apiClient
      .post("/users", postUser)
      .then((response) => {
        switch (response.status) {
          case 201:
            console.log("User created successfully")
            window.location.reload();
            break;
          case 400:
            console.error("Bad request");
            break;
          default:
            console.error("An error occurred");
        }
      })
      .catch((error) => {
        console.error(error);
      });

 
   


  };

  const submitPut = () => {
    const putUser = {
      email: putEmailNew,
      firstName: putFirstNameNew,
      lastName: putLastNameNew,
      class: putClassNew,
    } as User;
    
    const id = putEmail;
    
    apiClient.put(`/users/${id}`, putUser)
      .then(response => {
        switch (response.status) {
          case 200:
            console.log('User updated successfully')
            window.location.reload();
            break;
          case 400:
            console.error('Bad request');
            break;
          default:
            console.error('An error occurred');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

 
  const delUser = () => {
    const delID = deleteUser
    apiClient
      .delete(`/users/${delID}`)
      .then((response) => {
        switch (response.status) {
          case 200:
            console.log("User deleted successfully")
            window.location.reload();
            break;
          case 404:
            console.error("User not found");
            break;
          default:
            console.error("An error occurred");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="App">
      <table>
        <th>Email:</th>
        <th>Vezetéknév:</th>
        <th>Keresztnév:</th>
        <th>Osztály:</th>
        {data.map((c) => (
          <tr>
            <td>{c.email}</td>
            <td>{c.firstName}</td>
            <td>{c.lastName}</td>
            <td>{c.class}</td>
          </tr>
        ))}
      </table>
      <div>
        <h3>Adjon hozzá felhasználót!</h3>
        <input
          type="email"
          placeholder="E-mail"
          onChange={(e) => setPostUserEmail(String(e.target.value))}
        />
        <input
          type="text"
          placeholder="Vezetéknév"
          onChange={(e) => setPostUserFirstName(String(e.target.value))}
        />
        <input
          type="text"
          placeholder="Keresztnév"
          onChange={(e) => setPostUserLastName(String(e.target.value))}
        />
        <input
          type="text"
          placeholder="Osztály"
          onChange={(e) => setPostUserClass(String(e.target.value))}
        />
        <button onClick={submit}>Add hozzá!</button>
      </div>

      <div>
        <h3>Felhasználó módosítása: </h3>
        <input type="email" placeholder="Régi E-mail:"  onChange={(e) => setPutEmail(String(e.target.value))}/>
        <input type="email" placeholder="E-mail:"  onChange={(e) => setPutEmailNew(String(e.target.value))}/>
        <input type="email" placeholder="Vezetéknév"  onChange={(e) => setPutFirstNameNew(String(e.target.value))}/>
        <input type="email" placeholder="Keresztnév:"  onChange={(e) => setPutLastNameNew(String(e.target.value))}/>
        <input type="email" placeholder="Osztály:"  onChange={(e) => setPutClassNew(String(e.target.value))}/>
        <button onClick={submitPut}>Változtasd</button>
      </div>

      <div>
        <h3>Felhasználó törlése: </h3>
        <input type="email" placeholder="E-mail" onChange={(e) => setDeleteUSer(String(e.target.value))} />
        <button onClick={delUser}>Töröl</button>
      </div>
    </div>
  );
}

export default App;
