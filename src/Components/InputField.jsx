import { CiSearch } from "react-icons/ci";
// import { Region } from "./OptionField.jsx";

export function InputField({ value, onSearch }) {
  return (
    <>
      <div className="w-60 max-w-full ml-8 flex items-center my-4 shadow-xl border-0 outline-0 h-10 p-2 md:w-80 ">
        <CiSearch size={25} />
        <input
          type="text"
          value={value}
          onChange={(e) => onSearch(e.target.value)}
          className="w-20 flex-1 mx-2 p-2 border-0 outline-0 text-sm"
          placeholder="Search for a country"
        />
      </div>
      {/* <Region /> */}
    </>
  );
}
