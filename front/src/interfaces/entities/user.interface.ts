import {
  GraphqlQueryWorkspaceMember,
  WorkspaceMember,
  mapToWorkspaceMember,
} from './workspaceMember.interface';

export interface User {
  __typename: 'users';
  id: string;
  email?: string;
  displayName?: string;
  workspaceMember?: WorkspaceMember;
}

export type GraphqlQueryUser = {
  id: string;
  email?: string;
  displayName?: string;
  workspaceMember?: GraphqlQueryWorkspaceMember;
  __typename: string;
};

export type GraphqlMutationUser = {
  id: string;
  email?: string;
  displayName?: string;
  workspaceMember_id?: string;
  __typename: string;
};

export const mapToUser = (user: GraphqlQueryUser): User => ({
  __typename: 'users',
  id: user.id,
  email: user.email,
  displayName: user.displayName,
  workspaceMember: user.workspaceMember
    ? mapToWorkspaceMember(user.workspaceMember)
    : user.workspaceMember,
});

export const mapToGqlUser = (user: User): GraphqlMutationUser => ({
  id: user.id,
  email: user.email,
  displayName: user.displayName,
  workspaceMember_id: user.workspaceMember?.id,
  __typename: 'users',
});
