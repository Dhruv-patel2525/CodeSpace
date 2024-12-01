import Link from "next/link";

export const NavItem = (props:any) => (
  <>
  {props.link.label!=='Logout'?
   <li className="nav-item">
    <Link className="nav-link" href={props.link.href}>
          {props.link.label}
        </Link>
   </li>
   :
   <li className="nav-item">
      <button className="nav-link" onClick={props.onClick}>
          Logout
        </button>
   </li>
  }
  
  </>
   
  );