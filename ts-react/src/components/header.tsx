import { Link, useNavigate } from "react-router-dom";

function Header(){
    const navigate = useNavigate();
    const aboutNavigate = () => {
        navigate("/about")
    }

    return(
        <header>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <p onClick={aboutNavigate}>About</p>
                </li>
            </ul>
        </header>
    )
}

export default Header;