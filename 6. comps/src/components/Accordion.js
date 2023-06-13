import { useState } from "react";

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(0);

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        return (
            <div key={item.id}>
                <div>{item.label}</div>
                {/* || gives back the 1st value that is truthy.
                && gives back the 1st faulsy value or last truthy value */}
                {/* So in the below case it'll return content only when isExpanded is true */}
                {isExpanded && <div>{item.content}</div>}
            </div>
        );
    });

    return <div>{renderedItems}</div>
}

export default Accordion;