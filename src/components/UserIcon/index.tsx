import { UserIcon } from "./styles"

const UserIconComponent = ({ height, width, fontSize, children }: any) => {
    return (
        <UserIcon height={height} width={width} fontSize={fontSize}>
            {children}
        </UserIcon>
    );
}

export default UserIconComponent;