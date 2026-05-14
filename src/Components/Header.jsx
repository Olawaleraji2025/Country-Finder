import { CiDark } from "react-icons/ci";

function Header({ toggleBtn }) {
  return (
    <>
      <div className="flex justify-between shadow-lg p-4">
        <p className="text-m font-bold ">Where in the World?</p>
        <button
          onClick={toggleBtn}
          className="flex items-center gap-2 text-sm font-medium"
        >
          <CiDark size={20} />
          <span>Dark Mode</span>
        </button>
      </div>
    </>
  );
}

export default Header;
