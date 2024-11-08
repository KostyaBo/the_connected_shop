import { test, expect } from '@playwright/test';
import exp from 'constants';
// Group of tests
test.describe ('Check homepage elements', ()=> {

    let logoLink;
    let logoLinkPrimery;
    let logoLinkTransparent;
    let accountButton;
    let searchLink;
    let activeHomeMenu;
    let menuHomeButton;
    test.beforeEach( async ({page})=> {
    logoLink = page.locator('.Header__LogoLink');
    logoLinkPrimery = page.locator('.Header__LogoImage--primary');
    logoLinkTransparent = page.locator('.Header__LogoImage--transparent');
    accountButton = page.locator('a.Heading.Link--primary.Text--subdued', { hasText: 'Account' });
    searchLink = page.locator('a[data-action="toggle-search"]', { hasText: 'Search' });
    activeHomeMenu = page.locator('li.HorizontalList__Item.is-active');
    menuHomeButton = activeHomeMenu.locator('a.Heading.u-h6', { hasText: 'Home'});

        await page.goto('https://theconnectedshop.com/');
    }); 

test ('Check Title and URL', async ({page})=> {

    // Check a title
    await expect(page).toHaveTitle('The Connected Shop - Smart Locks, Smart Sensors, Smart Home & Office');
    // Check a URL
    await expect(page).toHaveURL('https://theconnectedshop.com/');
    })

test ('Check Logo', async ({page}) => {
    // Check Logo exist
    await expect(logoLink).toBeTruthy();
    await expect(logoLink).toHaveAttribute('href', '/');
    // Check Primary type
    await expect(logoLinkPrimery).toBeTruthy();
    await expect(logoLinkPrimery).toBeVisible();
    // Check Primaty attributes
    await expect(logoLinkPrimery).toHaveAttribute('src', '//theconnectedshop.com/cdn/shop/files/The_Connected_Shop_250x.png?v=1705959137');
    await expect(logoLinkPrimery).toHaveAttribute('alt', 'The Connected Shop Logo');
    await expect(logoLinkPrimery).toHaveAttribute('width', '250');
    await expect(logoLinkPrimery).toHaveAttribute('height', '75px');
    // Check transparent attributes
    await expect(logoLinkTransparent).toHaveAttribute('src', '//theconnectedshop.com/cdn/shop/files/The_Connected_Shop_logo_250x.png?v=1705959163');
    await expect(logoLinkTransparent).toHaveAttribute('alt', 'The Connected Shop Logo White');
    await expect(logoLinkTransparent).toHaveAttribute('width', '250');
    await expect(logoLinkTransparent).toHaveAttribute('height', '75px');
    // Check transparent type
    await expect(logoLinkTransparent).toBeTruthy();
    await expect(logoLinkTransparent).toBeVisible();
})

test ('Check Account button', async ({page}) => {
    // Check that Account btn exist
    await expect(accountButton).toBeTruthy();
    await expect(accountButton).toHaveAttribute('href', '/account');
})

test ('Check Search button', async ({page}) => {
    // Check that Search btn exist
    await expect (searchLink).toBeTruthy();
    await expect (searchLink).toHaveAttribute('href', '/search');
})

test ('Check Menu Home button', async ({page}) => {
    // Check that Home btn exist
    await expect (activeHomeMenu).toBeTruthy();
    await expect (menuHomeButton).toHaveText('HomeHome');
})

})