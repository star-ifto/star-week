import { ReactNode } from "react";
import { StyledContainer } from "./styles";

interface ITimelineContainerProps {
  right?: boolean;
  color?: "primary" | "secondary";

  hour: string;
  children: ReactNode;
}

export function TimelineContainer({
  right = false,
  color = "primary",

  hour,
  children,
}: ITimelineContainerProps) {
  return (
    <StyledContainer
      color={color}
      className={!right ? "left-container" : "right-container"}
    >
      <div className="rounded">{hour}</div>
      <div className="text-box">
        {children}

        <span className={`${right ? "right" : "left"}-container-arrow`}></span>
      </div>
    </StyledContainer>
  );
}
