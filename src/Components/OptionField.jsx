import { useState, useRef, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa6";

export function Region({ value, onRegionChange, className }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const regions = [
    { value: "", label: "All" },
    { value: "Africa", label: "Africa" },
    { value: "Americas", label: "Americas" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" },
  ];

  const currentRegion = regions.find((r) => r.value === value) || regions[0];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectRegion = (regionValue) => {
    onRegionChange(regionValue);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={`w-60 relative shadow-xl mx-8 ${className} md:w-55 p-2`}
      ref={dropdownRef}
    >
      <div
        className={`flex items-center justify-between ${className}`}
        onClick={toggleDropdown}
        role="button"
        tabIndex={0}
      >
        <span>{currentRegion.label}</span>
        <FaAngleDown size={15} />
      </div>
      {isOpen && (
        <div
          className={`w-55 absolute top-14 left-0  ${className} md:w-55 p-3`}
        >
          <div className="transition-all duration-200">
            {regions.map((region) => (
              <div
                key={region.value}
                className={`py-2 ${className}`}
                onClick={() => selectRegion(region.value)}
                role="option"
              >
                {region.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
