import { useState } from "react";
import { GoChevronDown } from "react-icons/go"
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded -pointer p-1"
        key={option.value}
        onClick={() => handleOptionClick(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {/* if value is null, then that's going to evaluate to be undefined
            And we'll get just the text "select". Otherwise, if value is defined,
            if it is an object, then we're going to print out it's label property. */}
        {value?.label || "Select..."}

        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full">
          {renderedOptions}
        </Panel>
      )}
    </div>
  );
}

export default Dropdown;
