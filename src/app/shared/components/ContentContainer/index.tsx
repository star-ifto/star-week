import { ReactNode } from "react";
import { StyledContainer } from "./styles";

export type TContentContainerType = "primary" | "secondary" | "tertiary";

interface IContentContainerProps {
    type: TContentContainerType;
    children: ReactNode;
}

export function ContentContainer({ type, children }: IContentContainerProps) {
    return (
        <StyledContainer type={type}>
            {children}
        </StyledContainer>
    )
}