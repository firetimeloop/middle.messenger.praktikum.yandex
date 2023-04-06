import ChangePasswordPage from './pages/ChangePassword';
import ChatsPage from './pages/Chats';
import LoginPage from './pages/Login';
import Error404Page from './pages/Error404';
import Error500Page from './pages/Error500';
import SignupPage from './pages/Signup';
import HomePage from './pages/Home';
import UserSettingsPage from './pages/UserSettings';

import router from './utils/Router';

document.addEventListener('DOMContentLoaded', () => {
  router
    .use('/', LoginPage)
    .use('/messenger', ChatsPage)
    .use('/sign-up', SignupPage)
    .use('/settings', UserSettingsPage)
    .use('/user-change-password', ChangePasswordPage)
    .use('/error-404', Error404Page)
    .use('/error-500', Error500Page)
    .use('/all-pages', HomePage)
    .start();
});
