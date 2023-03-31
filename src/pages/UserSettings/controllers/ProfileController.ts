import profileAPI, { ProfileData } from '../api/ProfileAPI';
import router from '../../../utils/Router';
import userController from './UserController';

export type ProfileDataWithAvatar = ProfileData & {
  avatar: File;
}

class ProfileController {
  public changeProfileData(data: ProfileDataWithAvatar) {
    // eslint-disable-next-line
    const { avatar, ...preparedData } = data;

    profileAPI
      .update(preparedData)
      .then((res) => {
        if (res.status === 200) {
          userController.getUser();
          router.go('/messenger');
        } else {
          console.log('Something went wrong');
        }
      })
      .catch((err) => console.log(`Something went wrong:${err.toString()}`));
  }
}

export default new ProfileController();
