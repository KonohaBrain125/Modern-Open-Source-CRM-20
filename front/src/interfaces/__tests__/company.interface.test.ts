import {
  mapToGqlCompany,
  mapToCompany,
  Company,
  GraphqlMutationCompany,
  GraphqlQueryCompany,
} from '../company.interface';

describe('Company mappers', () => {
  it('should map GraphQl Company to Company', () => {
    const now = new Date();
    now.setMilliseconds(0);
    const graphQLCompany = {
      id: '7dfbc3f7-6e5e-4128-957e-8d86808cdf6b',
      name: 'ACME',
      domain_name: 'exmaple.com',
      created_at: now.toUTCString(),
      employees: '10',
      address: '1 Infinite Loop, 95014 Cupertino, California, USA',
      account_owner: {
        id: '7af20dea-0412-4c4c-8b13-d6f0e6e09e87',
        email: 'john@example.com',
        display_name: 'John Doe',
        __typename: 'User',
      },
      pipes: [
        {
          id: '7dfbc3f7-6e5e-4128-957e-8d86808cdf6c',
          name: 'Pipe 1',
          icon: '!',
          __typename: 'Pipe',
        },
      ],
      __typename: 'companies',
    } satisfies GraphqlQueryCompany;

    const company = mapToCompany(graphQLCompany);
    expect(company).toStrictEqual({
      id: graphQLCompany.id,
      name: graphQLCompany.name,
      domainName: graphQLCompany.domain_name,
      creationDate: new Date(now.toUTCString()),
      employees: graphQLCompany.employees,
      address: graphQLCompany.address,
      accountOwner: {
        id: '7af20dea-0412-4c4c-8b13-d6f0e6e09e87',
        email: 'john@example.com',
        displayName: 'John Doe',
        workspaceMember: undefined,
      },
      pipes: [],
    } satisfies Company);
  });

  it('should map Company to GraphQLCompany', () => {
    const now = new Date();
    now.setMilliseconds(0);
    const company = {
      id: '7dfbc3f7-6e5e-4128-957e-8d86808cdf6b',
      name: 'ACME',
      domainName: 'example.com',
      employees: '10',
      address: '1 Infinite Loop, 95014 Cupertino, California, USA',
      pipes: [],
      accountOwner: {
        id: '522d4ec4-c46b-4360-a0a7-df8df170be81',
        email: 'john@example.com',
        displayName: 'John Doe',
      },
      creationDate: now,
    };
    const graphQLCompany = mapToGqlCompany(company);
    expect(graphQLCompany).toStrictEqual({
      id: company.id,
      name: company.name,
      domain_name: company.domainName,
      created_at: now.toUTCString(),
      employees: company.employees,
      address: company.address,
      account_owner_id: '522d4ec4-c46b-4360-a0a7-df8df170be81',
      __typename: 'companies',
    } satisfies GraphqlMutationCompany);
  });
});
