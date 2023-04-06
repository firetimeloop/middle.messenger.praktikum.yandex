import changePasswordAPI from '../api/ChangePasswordAPI';
import router from '../../../utils/Router';
import { UpdatePasswordDataWithConfirmation } from '../ChangePassword';

class ChangePasswordController {
  public changePassword(data: UpdatePasswordDataWithConfirmation) {
    if (data.newPassword !== data.newPasswordConfirm) {
      console.log('New password and new password confirmation didn\'t match');
      return;
    }

    const { newPasswordConfirm, ...preparedData } = data;

    changePasswordAPI
      .update(preparedData)
      .then((res) => {
        if ((res.status === 200)
          || (res.status === 400 && JSON.parse(res.response).reason === 'User already in system')
        ) {
          router.go('/settings');
        } else {
          console.log('Something went wrong');
        }
      })
      .catch((err) => console.log(`Something went wrong:${err.toString()}`));
  }
}

export default new ChangePasswordController();
