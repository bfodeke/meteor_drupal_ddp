// AT Route configurations.
AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('enrollAccount');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn', {
  redirect: '/'
});
AccountsTemplates.configureRoute('signUp');

// AT Configurations.
AccountsTemplates.configure({
  // Behavior.
  overrideLoginErrors: false,
  enablePasswordChange: true,
  sendVerificationEmail: true,
  enforceEmailVerification: true,
  confirmPassword: true,
  forbidClientAccountCreation: false,

  // Appearance.
  defaultLayout: 'layout',
  showAddRemoveServices: false,
  showForgotPasswordLink: true,
  showLabels: false,
  showPlaceholders: true,

  // Redirects.
  homeRoutePath: '/',
  redirectTimeout: 2000,

  // Client-side validation.
  continuousValidation: false,
  negativeValidation: true,
  positiveValidation:true,
  negativeFeedback: false,
  positiveFeedback: true,
  showValidating: false
});