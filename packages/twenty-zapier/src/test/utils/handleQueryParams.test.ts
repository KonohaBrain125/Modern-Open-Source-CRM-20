import handleQueryParams from '../../utils/handleQueryParams';

describe('utils.handleQueryParams', () => {
  test('should handle empty values', () => {
    const inputData = {};
    const result = handleQueryParams(inputData);
    const expectedResult = '';
    expect(result).toEqual(expectedResult);
  });
  test('should format', async () => {
    const inputData = {
      name: 'Company Name',
      address: 'Company Address',
      domainName: 'Company Domain Name',
      linkedinUrl: 'Test linkedinUrl',
      xUrl: 'Test xUrl',
      annualRecurringRevenue: 100000,
      idealCustomerProfile: true,
      employees: 25,
    };
    const result = handleQueryParams(inputData);
    const expectedResult =
      'name: "Company Name", ' +
      'address: "Company Address", ' +
      'domainName: "Company Domain Name", ' +
      'linkedinUrl: "Test linkedinUrl", ' +
      'xUrl: "Test xUrl", ' +
      'annualRecurringRevenue: 100000, ' +
      'idealCustomerProfile: true, ' +
      'employees: 25';
    expect(result).toEqual(expectedResult);
  });
});
