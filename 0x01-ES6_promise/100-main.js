import { uploadPhoto, createUser } from './utils.js';

export async function asyncUploadUser() {
  try {
    const [photoResponse, userResponse] = await Promise.all([
      uploadPhoto(),
      createUser()
    ]);

    return {
      photo: photoResponse,
      user: userResponse
    };
  } catch (error) {
    return {
      photo: null,
      user: null
    };
  }
}
