import router from '../../../utils/Router';
import store from '../../../utils/Store';
import userSettingsAPI, { ProfileData } from '../api/UserSettingsAPI';

export type ProfileDataWithAvatar = ProfileData & {
    avatar: File;
  }

class UserSettingsController {
  public logout() {
    userSettingsAPI
      .deleteSession()
      .then((res) => {
        if (res.status !== 200) {
          console.log('Something went wrong');
        }
      })
      .catch((err) => console.log(`Something went wrong:${err.toString()}`))
      .finally(() => router.go('/'));
  }

  public changeAvatar(data: ProfileDataWithAvatar) {
    const { avatar } = data;

    if (avatar.size === 0) {
      return;
    }

    const formDate = new FormData();

    formDate.append('avatar', avatar);

    userSettingsAPI
      .updateAvatar(formDate)
      .then((res) => {
        if (res.status === 200) {
          this.getUser();
        } else {
          console.log('Something went wrong');
        }
      })
      .catch((err) => console.log(`Something went wrong:${err.toString()}`));
  }

  public changeProfileData(data: ProfileDataWithAvatar) {
    // eslint-disable-next-line
    const { avatar, ...preparedData } = data;

    userSettingsAPI
      .update(preparedData)
      .then((res) => {
        if (res.status === 200) {
          this.getUser();
          router.go('/messenger');
        } else {
          console.log('Something went wrong');
        }
      })
      .catch((err) => console.log(`Something went wrong:${err.toString()}`));
  }

  public getUser() {
    return userSettingsAPI
      .request()
      .then((data) => {
        store.set('user', JSON.parse(data.response));
      });
  }
}

export default new UserSettingsController();
