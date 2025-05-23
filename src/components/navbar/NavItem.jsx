import "./NavItem.css";

function NavItem(props) {
  return (
    <li>
      <a className="nav-item" href={props.url}>
        {props.icon} {props.name}
      </a>
    </li>
  );
}

export default NavItem;
