import { fetchWithAuth } from "@/app/utils/api/api";
import { clearTokens } from "@/app/utils/TokenUtils";
import Link from "next/link";
import { redirect } from "next/navigation";

interface NavItemProps {
  link: {
    label: string;
    href?: string; // Optional because Logout might not need it
  };
  onClick?: () => void; // Optional for non-Logout items
}



export const NavItem = ({ link, onClick }: NavItemProps) => {
 // const router = useRouter();
  // const { link, onClick } = props;
 
  
  return (
    <>
      {link.label !== "Logout" ? (
        <li className="nav-item">
          <Link className="nav-link" href={link.href || "#"}>
            {link.label}
          </Link>
        </li>
      ) : (
        <li className="nav-item">
          <button
            className="nav-link"
            onClick={onClick}
          >
            Logout
          </button>
        </li>
      )}
    </>
  );
};
