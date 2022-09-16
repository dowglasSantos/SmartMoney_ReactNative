import uuid from 'react-native-uuid';

export const getUUID = () => {
  const id = uuid.v4(); // ⇨ '11edc52b-2918-4d71-9058-f7285e29d894'

  return id;
};
