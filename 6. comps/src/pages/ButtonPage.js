import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function ButtonPage() {
    const handleClick = () => {
        console.log("Click!!");
    };

    return <div>
        <div>
            <Button primary rounded className="mb-5" onCLick={handleClick}>
                <GoBell /> 
                Click me!
                </Button>
        </div>
        <div>
            <Button success outlined rounded>
                <GoCloudDownload />
                Buy now!
                </Button>
        </div>
        <div>
            <Button warning >Hide Ads!</Button>
        </div>
        <div>
            <Button secondary outlined>
                <GoDatabase />
                See Deal!
                </Button>
        </div>
        <div>
            <Button danger rounded>Something!</Button>
        </div>
    </div>;
}

export default ButtonPage;