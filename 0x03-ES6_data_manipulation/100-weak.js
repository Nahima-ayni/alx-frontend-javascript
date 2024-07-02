export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  let counter = 0;
  if (weakMap.get(endpoint)) counter = weakMap.get(endpoint);
  weakMap.set(endpoint, counter + 1);
  if (counter + 1 >= 5) throw new Error('Endpoint load is high');
}