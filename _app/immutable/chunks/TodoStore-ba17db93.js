import{w as n}from"./index-13129d7e.js";import{s as a}from"./AuthStore-94daa87b.js";const l=n([]),u=async()=>{const{data:r,error:t}=await a.from("todo").select();if(t)return console.error(t);l.set(r)},f=async(r,t=null)=>{if(a.auth.user()){const{data:e,error:o}=await a.from("todo").insert({text:r,user_id:t});if(o)return console.error(o);l.update(s=>[...s,e[0]])}else l.update(e=>{const o=[...e,{text:r,completed:!1,id:Date.now()}];return console.log(o),o})},i=async r=>{if(a.auth.user()){const{error:t}=await a.from("todo").delete().match({id:r});if(t)return console.error(t);l.update(e=>e.filter(o=>o.id!==r))}else l.update(t=>t.filter(e=>e.id!==r))},m=async(r,t)=>{if(a.auth.user()){const{error:e}=await a.from("todo").update({completed:!t}).match({id:r});if(e)return console.error(e)}l.update(e=>{let o=-1;for(let s=0;s<e.length;s++)if(e[s].id===r){o=s;break}return o!==-1&&(e[o].completed=!e[o].completed),e})};export{f as a,l as b,i as d,u as l,m as t};
