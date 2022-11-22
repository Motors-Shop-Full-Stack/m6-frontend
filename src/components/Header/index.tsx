import axios from "axios";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useApi } from "../../providers/api";
import { IUser } from "../Form/interfaces";
import HeaderDefault from "./HeaderDefault";
import HeaderLogged from "./HeaderLogged";

const Header = () => {
  const { user } = useApi()

  return (
    <>
      {user ? (<HeaderLogged data={user} />) : (<HeaderDefault />)}
    </>
  );
};

export default Header;
