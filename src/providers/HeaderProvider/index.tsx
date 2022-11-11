import React, { ReactNode } from "react";
import { createContext, useContext, useState } from "react";

interface IProviderProps {
  children: ReactNode;
}

interface IHeaderData {
  open: boolean;
  handleClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  handleClose: () => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  getInitials: (name: string) => string;
  formatName: (name: string) => string;
  anchorEl: HTMLElement | null
}

const HeaderContext = createContext<IHeaderData>({} as IHeaderData);

export const HeaderProvider = ({ children }: IProviderProps) => {
  ///Desktop dropdown variables
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  ///Mobile dropdown variables
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const getInitials = (name: string) => {
    return (
      name.split(" ")[0][0] + name.split(" ")[name.split(" ").length - 1][0]
    );
  };

  const formatName = (name: string) => {
    return (
      name.split(" ")[0] + " " + name.split(" ")[name.split(" ").length - 1]
    );
  };

  return (
    <HeaderContext.Provider
      value={{
        open,
        handleClick,
        handleClose,
        isOpen,
        setIsOpen,
        getInitials,
        formatName,
        anchorEl
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
export const useHeader = () => useContext(HeaderContext);
