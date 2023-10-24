import { Bundle, createAppTester, ZObject } from 'zapier-platform-core';
import App from '../../index';
import getBundle from '../../utils/getBundle';
import requestDb from '../../utils/requestDb';
const appTester = createAppTester(App);

describe('triggers.company', () => {
  test('should succeed to subscribe', async () => {
    const bundle = getBundle({});
    bundle.targetUrl = 'https://test.com';
    const result = await appTester(
      App.triggers.company.operation.performSubscribe,
      bundle,
    );
    expect(result).toBeDefined();
    expect(result.id).toBeDefined();
    const checkDbResult = await appTester(
      (z: ZObject, bundle: Bundle) =>
        requestDb(
          z,
          bundle,
          `query findManyWebHook {findManyWebHook(where: {id: {equals: "${result.id}"}}){id operation}}`,
        ),
      bundle,
    );
    expect(checkDbResult.data.findManyWebHook.length).toEqual(1);
    expect(checkDbResult.data.findManyWebHook[0].operation).toEqual(
      'createOneCompany',
    );
  });
  test('should succeed to unsubscribe', async () => {
    const bundle = getBundle({});
    bundle.targetUrl = 'https://test.com';
    const result = await appTester(
      App.triggers.company.operation.performSubscribe,
      bundle,
    );
    const unsubscribeBundle = getBundle({});
    unsubscribeBundle.subscribeData = { id: result.id };
    const unsubscribeResult = await appTester(
      App.triggers.company.operation.performUnsubscribe,
      unsubscribeBundle,
    );
    expect(unsubscribeResult).toBeDefined();
    expect(unsubscribeResult.id).toEqual(result.id);
    const checkDbResult = await appTester(
      (z: ZObject, bundle: Bundle) =>
        requestDb(
          z,
          bundle,
          `query findManyWebHook {findManyWebHook(where: {id: {equals: "${result.id}"}}){id}}`,
        ),
      bundle,
    );
    expect(checkDbResult.data.findManyWebHook.length).toEqual(0);
  });
  test('should load company from web-hook', async () => {
    const bundle = {
      cleanedRequest: {
        id: 'd6ccb1d1-a90b-4822-a992-a0dd946592c9',
        name: '',
        domainName: '',
        createdAt: '2023-10-19 10:10:12.490',
        address: '',
        employees: null,
        linkedinUrl: null,
        xUrl: null,
        annualRecurringRevenue: null,
        idealCustomerProfile: false,
      },
    };
    const results = await appTester(
      App.triggers.company.operation.perform,
      bundle,
    );
    expect(results.length).toEqual(1);
    const company = results[0];
    expect(company.id).toEqual('d6ccb1d1-a90b-4822-a992-a0dd946592c9');
  });
  it('should load companies from list', async () => {
    const bundle = getBundle({});
    const results = await appTester(
      App.triggers.company.operation.performList,
      bundle,
    );
    expect(results.length).toBeGreaterThan(1);
    const firstCompany = results[0];
    expect(firstCompany.id).toBeDefined();
  });
});
