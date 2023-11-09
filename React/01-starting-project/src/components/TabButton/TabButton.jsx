import './TabButton.css';

/* Alternative 1 
export default function TabButton(props) {
    return (
        <li><button>{props.children}</button></li>
    );
}
*/

/* Alternative 2 */
export default function TabButton({children, onSelect}) {
    return (
        <li>
            <button onClick={onSelect} >{children}</button>
        </li>
    );
}