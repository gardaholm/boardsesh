import React from 'react';
import Card from 'antd/es/card';

import ClimbCardCover from './climb-card-cover';
import { Climb, BoardDetails } from '@/app/lib/types';
import ClimbCardActions from './climb-card-actions';

type ClimbCardProps = {
  climb?: Climb;
  boardDetails: BoardDetails;
  coverLinkToClimb?: boolean;
  onCoverClick?: () => void;
  selected?: boolean;
  actions?: React.JSX.Element[];
};

const ClimbCard = ({ climb, boardDetails, onCoverClick, selected, actions }: ClimbCardProps) => {
  const cover = <ClimbCardCover climb={climb} boardDetails={boardDetails} onClick={onCoverClick} />;
  return (
    <Card
      title={climb ? `${climb.name} ${climb.difficulty} ★${climb.quality_average}` : 'Loading...'}
      size="small"
      style={{ backgroundColor: selected ? '#eeffff' : '#FFF' }}
      actions={actions || ClimbCardActions({ climb, boardDetails })}
    >
      {/* // @ ${climb.angle}° - ${climb.ascensionist_count} ascents, */}
      {cover}
    </Card>
  );
};
export default ClimbCard;
