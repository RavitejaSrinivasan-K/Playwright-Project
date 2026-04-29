import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();

  await page.getByRole('link', { name: 'Log in' }).click();
  await expect(page.getByRole('dialog', { name: 'Log in' })).toBeVisible();

  await page.locator('#loginusername').click();
  await expect(page.getByRole('img', { name: 'First slide' })).toBeVisible();

  await page.locator('#loginusername').press('CapsLock');
  await page.locator('#loginusername').fill('R');
  await page.locator('#loginusername').press('CapsLock');
  await page.locator('#loginusername').fill('Raviteja18');
  await expect(page.getByRole('img', { name: 'Second slide' })).toBeVisible();

  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').press('CapsLock');
  await page.locator('#loginpassword').fill('T');
  await page.locator('#loginpassword').press('CapsLock');
  await page.locator('#loginpassword').fill('Trend@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();

  await page.locator('#tbodyid').click();
  await page.goto('https://www.demoblaze.com/');
  await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();

  await page.locator('#tbodyid').click();
  await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();

  await page.locator('div').filter({ hasText: 'Samsung galaxy s6$360The' }).nth(4).click();
  await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();

  await page.getByRole('heading', { name: 'Samsung galaxy s6' }).click();
  await expect(page.locator('h2')).toContainText('Samsung galaxy s6');
  await expect(page.locator('#imgp img')).toBeVisible();
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - list:
      - listitem
      - listitem
      - listitem
    - link:
      - /url: "#myCarousel-2"
    - link:
      - /url: "#myCarousel-2"
    - heading "Samsung galaxy s6" [level=2]
    - separator
    - heading /\\$\\d+ \\*includes tax/ [level=3]
    - separator
    - list:
      - listitem
    - strong: Product description
    - paragraph: /The Samsung Galaxy S6 is powered by 1\\.5GHz octa-core Samsung Exynos \\d+ processor and it comes with 3GB of RAM\\. The phone packs 32GB of internal storage cannot be expanded\\./
    - separator
    - link "Add to cart":
      - /url: "#"
    `);
  await page.getByRole('heading', { name: '$360 *includes tax' }).click();
});