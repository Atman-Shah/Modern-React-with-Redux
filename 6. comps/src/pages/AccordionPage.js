import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            id: 1,
            label: "Can I use React on my project?",
            content: "You can use React on any projct. You can use React on any projct You can use React on any projct"
        },
        {
            id: 2,
            label: "Can I use JavaScript on my project?",
            content: "You can use React on any projct. You can use React on any projct You can use React on any projct"
        },
        {
            id: 3,
            label: "Can I use JavaScript on my project?",
            content: "You can use React on any projct. You can use React on any projct You can use React on any projct"
        }
    ];

    return <Accordion items={items} />
}

export default AccordionPage;