import "./SideItem.css";

function SideItem(props) {
  return (
    <li>
      <a className="side-item block" href={props.url}>
        {props.name}
      </a>
    </li>
  );
}

export default SideItem;
