import HeaderDefault from "./HeaderDefault/indes";
import HeaderLogged from "./HeaderLogged";

const Header = ({ data }: any) => {
  
  return (
    <>
    {data ? (<HeaderLogged data={data} />) : (<HeaderDefault />)}
    </>
  );
};

export default Header;
