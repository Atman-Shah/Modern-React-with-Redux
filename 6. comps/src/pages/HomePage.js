import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import classNames from "classnames";

function HomePage() {
    const Navigate = useNavigate();

    const classes = classNames('text-blue-500', 'mb-3');

    return (
    <div>
    <div>
        <Button onClick={() => {
            Navigate("/accordion");
        }} className={classes}>Accordion</Button>
    </div>
    <div>
        <Button onClick={() => {
            Navigate("/button");
        }} className={classes}>Button</Button>
    </div>
    <div>
        <Button onClick={() => {
            Navigate("/dropdown");
        }} className={classes}>Dropdown</Button>
    </div>
    </div>
    );
}

export default HomePage;