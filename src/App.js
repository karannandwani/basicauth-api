import { useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase-config";
import './App.css';
import { Register } from "./Components/Register/Register";
import { Login } from "./Components/Login/Login";
import { Body } from "./Components/Body/Body";

function App() {

  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggle, setToggle] = useState(false);


  const [user, setUser] = useState({})

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })

  const changeRegEmail = (e) => {
    setRegEmail(e.target.value);
    console.log(regEmail);
  }
  const changeEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  }

  const changeRegPassword = (e) => {
    setRegPassword(e.target.value);
    console.log(regPassword);
  }
  const changePassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
  }

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, regEmail, regPassword);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  }
  const logIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  }
  const logOut = async () => {

    await signOut(auth);
  }

  return (
    <>
      {/* {user?<Navbar />:<RegLog />} */}
      {user ?
        <><Body logOut={logOut} /></>
        : <>{toggle ? <Login toggle={toggle} setToggle={setToggle} changeEmail={changeEmail} changePassword={changePassword} logIn={logIn} user={user} logOut={logOut} /> : <Register toggle={toggle} setToggle={setToggle} changeRegEmail={changeRegEmail} changeRegPassword={changeRegPassword} register={register} user={user} logOut={logOut} />}</>}
    </>
  );
}

export default App;
