import { Link, useLocation } from "react-router-dom";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaRegClock} from "react-icons/fa";
import { FaDisplay, FaRightFromBracket, FaCircleQuestion} from "react-icons/fa6";
function KanbasNavigation() {
  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="fs-2" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />  },
    { label: "Courses",   icon: <FaBook className="fs-2" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox", icon: <FaInbox className="fs-2"/> },
    { label: "History", icon: <FaRegClock className="fs-2"/> },
    { label: "Studio", icon: <FaDisplay className="fs-2"/> },
    { label: "Commons", icon: <FaRightFromBracket className="fs-2"/> },
    { label: "Help", icon: <FaCircleQuestion className="fs-2"/> }
  ];
  const { pathname } = useLocation();
  return (
    <div className="sidenav wd-kanbas-sidenav d-block">
        <ul className="wd-kanbas-navigation">
            <li>
                <Link className="wd-kanbas-nav-link" to={`/Kanbas/Dashboard`}>
                    <img src={require("../../images/Northeastern-University-Logo.png")}
                    className="wd-kanbas-navigation-icon"/>
                </Link>
            </li>
            {links.map((link, index) => (
                <li key={index} className={pathname.endsWith(link.label) ? "wd-active" : ""}>
                <Link className="wd-kanbas-nav-link" to={`/Kanbas/${link.label}`}> {link.icon} <br/>{link.label} </Link>
                </li>
            ))}
        </ul>
    </div>
  );
}
export default KanbasNavigation;