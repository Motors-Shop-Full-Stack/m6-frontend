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
  anchorEl: HTMLElement | null
  setAnchorEl: React.Dispatch<React.SetStateAction<null | HTMLElement>>;
}

const HeaderContext = createContext<IHeaderData>({} as IHeaderData);

export const HeaderProvider = ({ children }: IProviderProps) => {
  ///Desktop dropdown variables
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  ///Mobile dropdown variables
  const [isOpen, setIsOpen] = React.useState<boolean>(false);


  return (
    <HeaderContext.Provider
      value={{
        open,
        handleClick,
        handleClose,
        isOpen,
        setIsOpen,
        anchorEl,
        setAnchorEl
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
export const useHeader = () => useContext(HeaderContext);
