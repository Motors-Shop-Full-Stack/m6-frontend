import React from "react";
import { IProviders } from "..";
import { createContext, useContext, useState } from "react";

export interface IModal {
  setFirstModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSecondModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleFirstModal: (prop: string, bool: boolean) => void;
  handleSecondModal: () => void;
  firstModal: boolean;
  secondModal: boolean;
  selectedModal: string
}

const ModalContext = createContext<IModal>({} as IModal);

export const ModalProvider = ({ children }: IProviders) => {
  const [firstModal, setFirstModal] = useState<boolean>(false);
  const [secondModal, setSecondModal] = useState<boolean>(false);
  const [selectedModal, setSelectedModal] = useState<string>("")

  const handleFirstModal = (prop: string, bool: boolean) => {
    setFirstModal(bool);
    setSelectedModal(prop)
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
        selectedModal
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
export const useModal = () => useContext(ModalContext);
