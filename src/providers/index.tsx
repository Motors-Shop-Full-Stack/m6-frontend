import { ReactNode } from "react";
import { ModalProvider } from "./modal";
import { ApiProvider } from "./api";

export interface IProviders {
  children: ReactNode;
}
const Providers = ({ children }: IProviders) => {
  return (
    <ModalProvider>
      <ApiProvider>{children}</ApiProvider>
    </ModalProvider>
  );
};
export default Providers;
