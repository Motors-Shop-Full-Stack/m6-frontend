import { ReactNode } from "react";
import { useModal } from "../../providers/modal";
import { ModalSection, ModalContainerOne, ModalContainerTwo } from "./styles";

interface IModalProps {
  children: ReactNode;
  name: string;
  pTop: string;
  pLeft?: string;
  pRight?: string;
}
const Modal = ({ children, name, pTop, pLeft, pRight }: IModalProps) => {
  const { firstModal, secondModal } = useModal();

  switch (name.toLowerCase()) {
    case "first":
      return (
        <>
          {firstModal ? (
            <ModalSection>
              <ModalContainerOne pTop={pTop} pLeft={pLeft} pRight={pRight}>
                {children}
              </ModalContainerOne>
            </ModalSection>
          ) : null}
        </>
      );

    case "second":
      return (
        <>
          {secondModal ? (
            <ModalSection>
              <ModalContainerTwo pTop={pTop} pLeft={pLeft} pRight={pRight}>
                {children}
              </ModalContainerTwo>
            </ModalSection>
          ) : null}
        </>
      );

    default:
      return null;
  }
};
export default Modal;
