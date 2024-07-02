export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);

  function isValidOffset(position, length) {
    throw Error('Position outside range')
  }
  view.setInt8(value, position)
}