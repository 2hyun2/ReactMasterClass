// import { useState } from "react";
// import Router from "./router"
import { Outlet } from "react-router-dom"
import Header from "./components/header";



function Root() {
  // const [value, setValue] = useState("")
  // const setValueOnChange = (e: React.FormEvent<HTMLInputElement>) => {
  //   console.log(e.currentTarget.value);
  //   const { currentTarget: {value} } = e;
  //   // const value = e.currentTarget.value;
  //   setValue(value)
  // }

  // const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log("hello", value)
  // }

  return (
    // <div>
    //   <form onSubmit={onSubmit}>
    //     <input value={value} onChange={setValueOnChange} type="text" placeholder="user name"/>
    //     <button>log in</button>
    //   </form>
    // </div>
    <>
      <Header />
      <Outlet />
    </>
    
  );
}

export default Root;