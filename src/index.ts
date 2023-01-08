import ChangePasswordPage from './pages/ChangePassword';
import Chats from './pages/Chats';
import LoginPage from './pages/Login';
import Error404Page from './pages/Error404';
import Error500Page from './pages/Error500';
import SigninPage from './pages/Signin';
import HomePage from './pages/Home';
import Block from './utils/Block';
import UserSettingsPage from './pages/UserSettings';
import renderDom from './utils/renderDom';

// document.querySelectorAll('[data-regex]:not([data-regex=""])')

const PAGES: Record<string, Block> = {
  // '/': new HomePage({ title: 'Home page' }),
  '/': new HomePage(),
  '/chats': new Chats(),
  '/login': new LoginPage(),
  '/signin': new SigninPage(),
  '/user-settings': new UserSettingsPage(),
  '/user-change-password': new ChangePasswordPage(),
  '/error-404': new Error404Page(),
  '/error-500': new Error500Page(),
};

document.addEventListener('DOMContentLoaded', () => {
  const page = PAGES[window.location.pathname];

  renderDom('#app', page);
});
