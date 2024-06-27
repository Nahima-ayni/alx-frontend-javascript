import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  let size1 = new ClassRoom(19);
  let size2 = new ClassRoom(20);
  let size3 = new ClassRoom(34);

  return [size1, size2, size3];
}
