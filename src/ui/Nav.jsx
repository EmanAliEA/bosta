import { RiShoppingBag4Fill } from "react-icons/ri";
import { useNavigate } from "react-router";
import Button from "./Button";
function Nav() {
  const navigate = useNavigate();
  return (
    <nav className="flex items-center justify-around bg-gray-300 px-2 py-5 text-4xl">
      <div className="flex items-center gap-1">
        <RiShoppingBag4Fill className="text-3xl" />
        <button onClick={() => navigate("/")} className="font-bold uppercase">
          store
        </button>
      </div>
      <p className="capitalize">welcome user</p>
      {/* <div className="space-x-2">
        <Button>login</Button>
        <Button>logout</Button>
      </div> */}
    </nav>
  );
}

export default Nav;
