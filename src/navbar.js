import { Link } from "react-router-dom";
function Navbar(){
    let style1={
        display:'flex',
        justifyContent:'flex-start'
    }
    let style2={
        marginLeft:'3rem',
        marginTop:'3rem'
    }
    return(
        <div style={style1}>
            <h1><Link to="/">Movies App</Link></h1>
            <h2 style={style2}><Link to="/favourite">Favourite</Link></h2>
        </div>
    )
    
        
}
export default Navbar;