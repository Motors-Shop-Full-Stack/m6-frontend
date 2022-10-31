import { ReactNode } from "react";
import { ModalProvider } from "./modal";

export interface IProviders {
  children: ReactNode;
}
const Providers = ({ children }: IProviders) => {
  return <ModalProvider>{children}</ModalProvider>;
};
export default Providers;
