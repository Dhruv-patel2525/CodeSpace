import Link from "next/link";

export const NavItem = ({ link }:{link:{href:string,label:string}}) => (
    <li className="nav-item">
      <Link className="nav-link" href={link.href}>
        {link.label}
      </Link>
    </li>
  );