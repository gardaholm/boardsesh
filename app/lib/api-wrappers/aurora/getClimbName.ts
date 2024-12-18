import { BoardName } from '../../types';
import { WEB_HOSTS } from './types';

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export async function getClimbName(board: BoardName, climbId: string): Promise<string | null> {
  const response = await fetch(`${WEB_HOSTS[board]}/climbs/${climbId}`);
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  const text = await response.text();
  const match = text.match(/<h1[^>]*>([^<]+)<\/h1>/);
  return match ? match[1].trim() : null;
}
