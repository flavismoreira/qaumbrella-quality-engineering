import { test, expect } from '@playwright/test';

test('API: GET retorna 200', async ({ request }) => {
  const response = await request.get('https://httpbin.org/get');
  expect(response.status()).toBe(200);
});
