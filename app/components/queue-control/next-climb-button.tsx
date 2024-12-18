import React from 'react';
import Link from 'next/link';
import { useQueueContext } from './queue-context';
import { useParams } from 'next/navigation';
import { parseBoardRouteParams } from '@/app/lib/url-utils';
import { BoardRouteParametersWithUuid } from '@/app/lib/types';
import { FastForwardOutlined } from '@ant-design/icons';
import Button, { ButtonProps } from 'antd/es/button';

type NextClimbButtonProps = {
  navigate: boolean;
};

const NextButton = (props: ButtonProps) => (
  <Button {...props} type="default" icon={<FastForwardOutlined />} aria-label="Next climb" />
);

export default function NextClimbButton({ navigate = false }: NextClimbButtonProps) {
  const { setCurrentClimbQueueItem, getNextClimbQueueItem, viewOnlyMode } = useQueueContext(); // Assuming setSuggestedQueue is available
  const { board_name, layout_id, size_id, set_ids, angle } =
    parseBoardRouteParams(useParams<BoardRouteParametersWithUuid>());

  const nextClimb = getNextClimbQueueItem();

  const handleClick = () => {
    if (!nextClimb) {
      return;
    }
    setCurrentClimbQueueItem(nextClimb);
  };

  if (!viewOnlyMode && navigate && nextClimb) {
    return (
      <Link
        href={`/${board_name}/${layout_id}/${size_id}/${set_ids}/${angle}/view/${nextClimb?.climb.uuid}`}
        onClick={handleClick} // Update the queue when the link is clicked
      >
        <NextButton />
      </Link>
    );
  }
  return <NextButton onClick={handleClick} disabled={!nextClimb || viewOnlyMode} />;
}
