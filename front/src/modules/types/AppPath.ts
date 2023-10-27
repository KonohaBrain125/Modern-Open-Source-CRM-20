export enum AppPath {
  // Not logged-in
  Verify = '/verify',
  SignIn = '/sign-in',
  SignUp = '/sign-up',
  Invite = '/invite/:workspaceInviteHash',

  // Onboarding
  CreateWorkspace = '/create/workspace',
  CreateProfile = '/create/profile',

  // Onboarded
  Index = '/',
  PeoplePage = '/people',
  CompaniesPage = '/companies',
  CompanyShowPage = '/companies/:companyId',
  PersonShowPage = '/person/:personId',
  TasksPage = '/tasks',
  OpportunitiesPage = '/opportunities',
  ObjectTablePage = '/objects/:objectNamePlural',

  ObjectShowPage = '/object/:objectNameSingular/:objectId',

  SettingsCatchAll = `/settings/*`,
  DevelopersCatchAll = `/developers/*`,

  // Impersonate
  Impersonate = '/impersonate/:userId',

  // 404 page not found
  NotFoundWildcard = '*',
  NotFound = '/not-found',
}
