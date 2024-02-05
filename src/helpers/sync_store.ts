export function debounce(func: (...args: any) => void, delay: number): (...args: any) => void {
  let debounceTimeout: NodeJS.Timeout;

  return function (...args: any) {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      func(...args);
    }, delay);
  }
}

export const sync_store = debounce((websocket: any, data: any) => {
  websocket.send(`{"type": "sync", "data": ${JSON.stringify(data)}}`)
}, 500);

export default sync_store
