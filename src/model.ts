import type { Lang } from './i18n';
export type Address = { city:string; street:string; house:string; apartment:string; floor:string; entrance:string; notes:string };
export type Draft = { mood:'savory'|'sweet'; dietary:number[]; allergies:number[]; price:79|99|149; address:Address };
export type Order = Draft & { id:string; created:string; stage:number; cancelled:boolean; rating:number };
export type Data = { lang:Lang; draft:Draft; orders:Order[] };
export const KEY='4frogs-demo-v1';
export function fresh():Data { return {lang:'ru',draft:{mood:'savory',dietary:[],allergies:[],price:99,address:{city:'',street:'',house:'',apartment:'',floor:'',entrance:'',notes:''}},orders:[]}; }
export function addressValid(a:Address) { return [a.city,a.street,a.house].every(x=>x.trim().length>0); }
export function load():Data {
 try {
  const d=JSON.parse(localStorage.getItem(KEY)||'null');
  if (!d || !['ru','en','he'].includes(d.lang) || !validDraft(d.draft) || !Array.isArray(d.orders) || !d.orders.every((o:Order)=>validDraft(o)&&typeof o.id==='string'&&typeof o.created==='string'&&Number.isInteger(o.stage)&&o.stage>=0&&o.stage<=4&&typeof o.cancelled==='boolean'&&Number.isInteger(o.rating)&&o.rating>=0&&o.rating<=5)) return fresh();
  return d;
 } catch {return fresh();}
}
function validDraft(d:Draft) {return d && ['savory','sweet'].includes(d.mood) && [79,99,149].includes(d.price) && Array.isArray(d.dietary)&&d.dietary.every(x=>Number.isInteger(x)&&x>=0&&x<4)&&Array.isArray(d.allergies)&&d.allergies.every(x=>Number.isInteger(x)&&x>=0&&x<8)&&d.address&&['city','street','house','apartment','floor','entrance','notes'].every(k=>typeof d.address[k as keyof Address]==='string');}
export const addressText=(a:Address)=>[a.city,[a.street,a.house].filter(Boolean).join(' ')].filter(Boolean).join(', ');
