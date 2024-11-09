import { test, expect } from '@playwright/test';
import exp from 'constants';

test.describe ('Check Search Function', ()=> {

    let searchLink;
    let searchInput;
    let searchResultTitle;
    let searchNoResultTitle;
    let searchClose;

    test.beforeEach ( async ({page})=> {

    searchLink = page.locator('a[data-action="toggle-search"]', { hasText: 'Search' });
    searchInput = page.locator('input[name="q"]');
    searchClose = page.locator('button[data-action="close-search"]');
    searchResultTitle = page.locator('.Segment__Title Segment__Title--flexed').first();
    searchNoResultTitle = page.locator('.Segment__Content').first();

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

    test ('Check Result Title', async ({page}) => {
        await expect(searchLink).toBeTruthy();
        await searchLink.click();
        await expect(searchInput).toBeVisible();
        await expect(searchInput).toHaveAttribute('placeholder', 'Search...');
        await searchInput.fill('Smart Temperature Monitor');
        await expect(searchResultTitle).toBeTruthy();
    })

    test ('Check that the search query does not return anything', async ({page}) => {
        await expect(searchLink).toBeTruthy();
        await searchLink.click();
        await expect(searchInput).toBeVisible();
        await expect(searchInput).toHaveAttribute('placeholder', 'Search...');
        await searchInput.fill('test12345');
        await expect(searchNoResultTitle).toBeTruthy();
        await expect(searchNoResultTitle).toBeVisible();
        await expect(searchNoResultTitle).toHaveText('No results could be found');
    })

    test ('Close Search' , async ({page})=> {
        await expect(searchLink).toBeTruthy();
        await searchLink.click();
        await expect(searchInput).toBeVisible();
        await expect(searchInput).toHaveAttribute('placeholder', 'Search...');
        await searchInput.fill('test12345');
        await expect(searchNoResultTitle).toBeTruthy();
        await searchClose.click()
        await expect(searchNoResultTitle).toBeHidden();
    } )


})