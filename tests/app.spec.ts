import { test, expect } from '@playwright/test';

test('complete order, restrictions, reveal, rating and persistence', async({page})=>{
 const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('./');await page.getByRole('button',{name:'Удивите меня',exact:true}).click();
 await page.getByRole('button',{name:/Сытного/}).click();
 await page.getByRole('button',{name:'Веганское',exact:true}).click();
 await page.getByRole('button',{name:'Арахис',exact:true}).click();
 await page.getByRole('button',{name:'Продолжить',exact:true}).click();
 await page.getByRole('button',{name:/99/}).click();
 await page.getByLabel('Город').fill('Хайфа');await page.getByLabel('Улица').fill('Герцль');await page.getByLabel('Дом',{exact:false}).fill('12');
 await page.getByRole('button',{name:'Продолжить',exact:true}).click();
 await expect(page.getByRole('button',{name:'Создать демо-заказ'})).toBeDisabled();
 await expect(page.getByText('Арахис',{exact:true})).toBeVisible();
 await expect(page.getByText('Веганское',{exact:true})).toBeVisible();
 await page.getByRole('checkbox').check();await page.getByRole('button',{name:'Создать демо-заказ'}).click();
 await expect(page.getByText('Овощной боул с рисом',{exact:true})).toHaveCount(0);
 for(let i=0;i<4;i++)await page.getByRole('button',{name:'Следующий демо-статус'}).click();
 await page.getByRole('button',{name:'Открыть сюрприз'}).click();
 await expect(page.getByText('Овощной боул с рисом',{exact:true})).toBeVisible();
 await page.getByRole('button',{name:'5 из 5',exact:true}).click();await page.getByRole('button',{name:'Сохранить оценку'}).click();
 await expect(page.getByRole('heading',{name:'Спасибо! Твоя оценка сохранена.'})).toBeVisible();
 await page.reload();await page.getByRole('button',{name:'Мои заказы',exact:true}).first().click();await expect(page.getByText('Оценка: 5/5')).toBeVisible();
 expect(errors).toEqual([]);
});

test('mobile, RTL, input validation, offline and manifest',async({page,context})=>{
 await page.setViewportSize({width:390,height:844});await page.goto('./');
 await page.screenshot({path:'/workspace/4frogs-mobile.png',fullPage:true});
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 await page.getByLabel('Язык').selectOption('he');await expect(page.locator('html')).toHaveAttribute('dir','rtl');
 await page.screenshot({path:'/workspace/4frogs-hebrew.png',fullPage:true});
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 await page.getByRole('button',{name:'תפתיעו אותי',exact:true}).click();await page.getByRole('button',{name:/מתוק/}).click();
 await page.getByRole('button',{name:'המשך',exact:true}).click();await page.getByRole('button',{name:/79/}).click();
 await page.getByRole('button',{name:'המשך',exact:true}).click();await expect(page.getByRole('heading',{name:'לאן לשלוח את ההפתעה?'})).toBeVisible();
 await page.evaluate(async()=>{await navigator.serviceWorker.ready});
 await page.reload();await page.waitForFunction(()=>!!navigator.serviceWorker.controller);
 const manifest=await(await page.request.get('manifest.webmanifest')).json();expect(manifest.display).toBe('standalone');
 await context.setOffline(true);await page.reload();await expect(page.getByRole('heading',{name:/האוכל הוא הפתעה/})).toBeVisible();await expect(page.getByRole('status')).toContainText('אין חיבור');
 await context.setOffline(false);
});

test('desktop screenshot and cancellation',async({page})=>{
 await page.setViewportSize({width:1440,height:1000});await page.goto('./');
 await page.screenshot({path:'/workspace/4frogs-desktop.png',fullPage:true});
 await page.getByLabel('Язык').selectOption('en');await page.getByRole('button',{name:'Surprise me',exact:true}).click();
 await page.getByRole('button',{name:/Sweet/}).click();await page.getByRole('button',{name:'Continue',exact:true}).click();
 await page.getByRole('button',{name:/149/}).click();await page.getByLabel('City').fill('Haifa');await page.getByLabel('Street').fill('Herzl');await page.getByLabel('Building').fill('1');
 await page.getByRole('button',{name:'Continue',exact:true}).click();await page.getByRole('checkbox').check();await page.getByRole('button',{name:'Place demo order'}).click();
 await page.getByRole('button',{name:'Cancel demo order'}).click();await expect(page.getByRole('heading',{name:'Cancelled',exact:true})).toBeVisible();
 await expect(page.getByRole('button',{name:'Next demo status'})).toHaveCount(0);
});
