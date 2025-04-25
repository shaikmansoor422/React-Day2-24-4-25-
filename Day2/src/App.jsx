import Navbar from "./navbar";
import "./App.css"
import Frontend from "./front_end";
import Backend from "./backend";
import Database from "./dbase";

function Full_stack(){
  return(
    <>
    <div id="bg_img"></div>
    <Navbar></Navbar>
    <Frontend></Frontend>
    <Backend></Backend>
    <Database></Database>
    </>
  )
}
export default Full_stack