import './TabButton.css';

/* Alternative 1 
export default function TabButton(props) {
    return (
        <li><button>{props.children}</button></li>
    );
}
*/

/* Alternative 2 */
export default function TabButton({children}) {
    function handleClick() {
        console.log('Clicked');
    };

    return (
        <li>
            <button onClick={handleClick} >{children}</button>
        </li>
    );
}