import { ProfileData } from '../api/ProfileAPI';
import userController from './UserController';
import profileAvatarAPI from '../api/ProfileAvatarAPI';

export type ProfileDataWithAvatar = ProfileData & {
  avatar: File;
}

class ProfileAvatarController {
  public changeAvatar(data: ProfileDataWithAvatar) {
    const { avatar } = data;

    if (avatar.size === 0) {
      return;
    }

    const formDate = new FormData();

    formDate.append('avatar', avatar);

    profileAvatarAPI
      .update(formDate)
      .then((res) => {
        if (res.status === 200) {
          userController.getUser();
        } else {
          console.log('Something went wrong');
        }
      })
      .catch((err) => console.log(`Something went wrong:${err.toString()}`));
  }
}

export default new ProfileAvatarController();
