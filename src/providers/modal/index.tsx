import React from "react";
import { IProviders } from "..";
import { createContext, useContext, useState } from "react";

export interface IModal {
  setFirstModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSecondModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleFirstModal: () => void;
  handleSecondModal: () => void;
  firstModal: boolean;
  secondModal: boolean;
}

const ModalContext = createContext<IModal>({} as IModal);

export const ModalProvider = ({ children }: IProviders) => {
  const [firstModal, setFirstModal] = useState<boolean>(false);
  const [secondModal, setSecondModal] = useState<boolean>(false);

  const handleFirstModal = () => {
    setFirstModal(!firstModal);
  };

  const handleSecondModal = () => {
    setSecondModal(!secondModal);
  };

  return (
    <ModalContext.Provider
      value={{
        handleFirstModal,
        handleSecondModal,
        setFirstModal,
        setSecondModal,
        firstModal,
        secondModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
export const useModal = () => useContext(ModalContext);
