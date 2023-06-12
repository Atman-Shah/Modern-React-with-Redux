import Accordion from "./components/Accordion";

function App() {
    const items = [
        {
            label: "Can I use React on my project?",
            content: "You can use React on any projct. You can use React on any projct You can use React on any projct"
        },
        {
            label: "Can I use JavaScript on my project?",
            content: "You can use React on any projct. You can use React on any projct You can use React on any projct"
        },
        {
            label: "Can I use JavaScript on my project?",
            content: "You can use React on any projct. You can use React on any projct You can use React on any projct"
        }
    ];

    return <Accordion items={items} />
}

export default App;