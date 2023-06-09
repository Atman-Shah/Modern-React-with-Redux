import Button from "./Button";

function App() {
    return <div>
        <div>
            <Button primary rounded>Click me!</Button>
        </div>
        <div>
            <Button success outlined rounded>Buy now!</Button>
        </div>
        <div>
            <Button warning >Hide Ads!</Button>
        </div>
        <div>
            <Button secondary outlined>See Deal!</Button>
        </div>
        <div>
            <Button danger rounded>Something!</Button>
        </div>
    </div>;
}

export default App;