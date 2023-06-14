import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) { 
    const [expandedIndex, setExpandedIndex] = useState(0);

    // With all this extra work, we can now define an event handler outside of 
    // the mapping function, which is good because we're not going to clutter up 
    // the mapping function and make it hard to read.
    const handleClick = (nextIndex) => {
        setExpandedIndex(nextIndex);
    };

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        const icon = <span className="text-2xl">
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
        </span>

        return (
            <div key={item.id}>

                {/* when we are trying to call that event handler, we're going to 
                pass  in some information that was present only inside of the 
                mapping function, i.e. only inside the mapping function we 
                can access this index variable. */}
                <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => handleClick(index)}>
                    {item.label}
                    {icon}
                </div>

                {/* || gives back the 1st value that is truthy.
                && gives back the 1st faulsy value or last truthy value */}
                {/* So in the below case it'll  eturn content only when isExpanded is true */}
                {isExpanded && <div className="border-b p-5 ">
                    {item.content}
                    </div>}
            </div>
        );
    });

    return <div className="border-x border-t rounded ">{renderedItems}</div>
}

export default Accordion;