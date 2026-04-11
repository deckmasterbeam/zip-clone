const KEY = "zip-player-uuid";

export const getPlayerUUID = (): string => {
  let uuid = localStorage.getItem(KEY);
  if (!uuid) {
    uuid = crypto.randomUUID();
    localStorage.setItem(KEY, uuid);
  }
  return uuid;
}
