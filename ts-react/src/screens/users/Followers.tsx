import {useOutletContext } from "react-router-dom"

function Followers(){
    
    interface nameOfMyUserType {
        nameOfMyUser : string;
    }

        const { nameOfMyUser } = useOutletContext<nameOfMyUserType>();
    return (
        <h1>Follwers {nameOfMyUser}</h1>
    )
}
   
export default Followers

