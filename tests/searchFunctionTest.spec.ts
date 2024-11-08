import { test, expect } from '@playwright/test';

test.describe ('Check Search Function', ()=> {

    let searchLink;
    let searchInput;

    test.beforeEach ( async ({page})=> {

    searchLink = page.locator('a[data-action="toggle-search"]', { hasText: 'Search' });
    searchInput = page.locator('input[name="q"]');
    // resulttitle = page.locator('.Segment__Title Segment__Title--flexed').nth(0);

        await page.goto('https://theconnectedshop.com/');
    })

    test.afterEach ( async ({page})=> {
        await page.close();
    })

    test ('Check products exist', async ({page})=> {
        await expect(searchLink).toBeTruthy();
        await searchLink.click();
        await expect(searchInput).toBeVisible();
        await expect(searchInput).toHaveAttribute('placeholder', 'Search...');
        await searchInput.fill('Smart Temperature Monitor');
        await expect(searchInput).toHaveValue('Smart Temperature Monitor');
    })



})