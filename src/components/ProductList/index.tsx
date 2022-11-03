import { ReactNode } from "react";
import AuctionCard from "../AuctionCard";
import { AuctionWrapper } from "./styles";

interface ProductListProps{
    children: ReactNode
    title: string
    gap: string
    id: string
}

const ProductList = ({children, title, gap, id}: ProductListProps) => {
    return (
            <AuctionWrapper gap={gap} id={id}>
                <div className="auction-title">
                    <h5>{title}</h5>
                </div>
                <div className="auction-list">
                    {children}
                </div>
            </AuctionWrapper>

    );
}

export default ProductList;