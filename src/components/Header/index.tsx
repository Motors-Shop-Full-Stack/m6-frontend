import HeaderDefault from "./HeaderDefault";
import HeaderLogged from "./HeaderLogged";

const Header = ({ data }: any) => {
  
  return (
    <>
    {data ? (<HeaderLogged data={data} />) : (<HeaderDefault />)}
    </>
  );
};

export default Header;
