export const settingsLinks = [
  {
    name: 'Your name',
    description: 'Tell us your name to personalize communications.',
    link: '/settings/name',
  },
  {
    name: 'Account settings',
    description: 'Update your phone and email',
    link: '/settings/account',
  },
  {
    name: 'Notification settings',
    description: 'How should we contact you?',
    link: '/settings/notifications',
  },
];

export const footerRoutes = ['/user', '/terms-of-use', '/privacy-policy'];

export const avatarRoutes = ['/user'];

export const backButtonRoutes = [
  {
    path: '/auth/step-two',
    link: '/auth/step-one',
  },
  {
    path: '/settings',
    link: '/user',
  },
  {
    path: '/settings/name',
    link: '/settings',
  },
  {
    path: '/settings/account',
    link: '/settings',
  },
  {
    path: '/settings/email',
    link: '/settings/account',
  },
  {
    path: '/settings/notifications',
    link: '/settings',
  },
];
