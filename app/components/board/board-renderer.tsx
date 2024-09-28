import React from "react";
import { getImageUrl } from "./util";
import { BoardName, GetBoardDetailsResponse } from "@/app/lib/types";

export type BoardProps = {
  boardDetails: GetBoardDetailsResponse;
  board_name: BoardName;
  children: React.ReactNode;
};

const BoardRenderer = ({
  boardDetails,
  board_name,
  children
}: BoardProps) => {
  const { boardWidth, boardHeight} = boardDetails;

  return (
    <svg
      viewBox={`0 0 ${boardWidth} ${boardHeight}`}
      preserveAspectRatio="xMidYMid meet"  // Ensures aspect ratio is maintained
      style={{ width: "100%", height: "auto", display: "block", maxHeight: '60vh' }} // Ensures scaling
    >
      {Object.keys(boardDetails.images_to_holds).map((imageUrl) => (
        <image
          key={imageUrl}
          href={getImageUrl(imageUrl, board_name)}
          width="100%"
          height="100%"
        />
      ))}
      {children}
    </svg>
  );
};

export default BoardRenderer;
