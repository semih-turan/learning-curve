import "./TabButton.css";

/* Alternative 1 
export default function TabButton(props) {
    return (
        <li><button>{props.children}</button></li>
    );
}
*/

/* Alternative 2 */
export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
