import { BoardName, SaveAttemptOptions, generateUuid } from './util';
import { API_HOSTS } from './types';

async function saveAttempt(board: BoardName, token: string, options: SaveAttemptOptions): Promise<any> {
  const uuid = generateUuid();
  const response = await fetch(`${API_HOSTS[board]}/v1/bids/${uuid}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      uuid,
      ...options,
    }),
  });
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  return response.json();
}