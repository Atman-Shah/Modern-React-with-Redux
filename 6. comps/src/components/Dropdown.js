import { useState } from "react";

function Dropdown({ options, value, onChange }) {
    const[isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setIsOpen(false);
        onChange(option);
    };

    const renderedOptions = options.map((option) => {
        return <div key={option.value } onClick={() => handleOptionClick(option)}> 
            {option.label}
        </div>
    });

    return <div>
        <div onClick={handleClick}>
            {/* if value is null, then that's going to evaluate to be undefined
            And we'll get just the text "select". Otherwise, if value is defined,
            if it is an object, then we're going to print out it's label property. */}
            {value?.label || "Select..."}
        </div>
        {isOpen && <div>{renderedOptions}</div>}
    </div>
};

export default Dropdown;