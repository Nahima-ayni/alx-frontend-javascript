import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const size1 = new ClassRoom(19);
  const size2 = new ClassRoom(20);
  const size3 = new ClassRoom(34);
  const size_all = [size1, size2, size3];

  return (size_all);
}
