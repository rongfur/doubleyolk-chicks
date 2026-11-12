import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function App(){
 const [joy,setJoy]=useState(0);
 const nav=['Characters','Comics','Animations','About'];
 const navImages=['character','comic','animation','about'];
 return <>
 <div className="falling-stars" aria-hidden="true">{Array.from({length:18},(_,i)=><span key={i} className="snowflake" style={{'--left':`${(i*37+9)%100}%`,'--size':`${13+(i*7)%12}px`,'--duration':`${23+(i*11)%20}s`,'--delay':`${-(i*7)%41}s`,'--drift':`${i%2?45:-45}px`}}>❄</span>)}</div>
 <main>
 <section id="home" className="sketch-home" aria-labelledby="home-title">
   <div className="sketch-frame">
     <button className={`duo-logo ${joy % 2 ? 'duo-wiggle' : ''}`} onClick={()=>setJoy(joy+1)} aria-label="Say hello to the two chicks">
       <span className="logo-window"><img src={`${import.meta.env.BASE_URL}artwork/chicks-logo.png`} alt="The original yellow and white Double Yolk Chicks, drawn by the creator"/></span>
     </button>
     <span className="duo-greeting" role="status">{joy ? 'A little hello from the two of us! ♡' : ''}</span>
     <h1 id="home-title" className="original-title"><span className="sr-only">Double Yolk Chicks · 双黄小鸡</span><span className="title-window" aria-hidden="true"><img src={`${import.meta.env.BASE_URL}artwork/handwritten-title.png`} alt=""/></span></h1>
     <nav className="sketch-links" aria-label="Explore Double Yolk Chicks">{nav.map((n,i)=><a key={n} href={i===0?'#characters':undefined} aria-disabled={i!==0?true:undefined} aria-label={i===0?'Character 角色介绍':`${n} 筹备中`} className={`sketch-link sketch-link-${i}`}><span className="flower-frame" aria-hidden="true"><img src={`${import.meta.env.BASE_URL}artwork/orange-flower-frame.png`} alt=""/></span><span className="nav-word"><img src={`${import.meta.env.BASE_URL}artwork/nav-${navImages[i]}.png`} alt={['Character','Comic','Animation','About'][i]}/></span><small>{i===0?'角色介绍':'筹备中'}</small></a>)}</nav>
   </div>
 </section>
 <section id="characters" className="section-wrap characters-section" aria-label="角色介绍">
 <div className="character-section-title"><span>01</span><h2><img src={`${import.meta.env.BASE_URL}artwork/nav-character.png`} alt="Character"/></h2></div>
 <div className="duo-profiles">{[{name:'蛋黄 Yolk',image:'yolk-front.png'},{name:'蛋白 Puff',image:'puff-front.png'}].map(c=><figure className="chick-profile" key={c.name}><button className="chick-jump" aria-label={`和${c.name}打招呼`} onClick={e=>{e.currentTarget.classList.remove('hopping');void e.currentTarget.offsetWidth;e.currentTarget.classList.add('hopping');}} onAnimationEnd={e=>e.currentTarget.classList.remove('hopping')}><img src={`${import.meta.env.BASE_URL}artwork/${c.image}`} alt={c.name}/></button><figcaption>{c.name}</figcaption></figure>)}</div>

 </section>
 </main><footer className="section-wrap"><a className="footer-brand" href="#home">double yolk chicks <span>双黄小鸡</span></a><p>Original characters. Little stories. Made with love.</p><a href="#home">Back to the top ↑</a><small>© {new Date().getFullYear()} Double Yolk Chicks. Original artwork belongs to its creator.</small></footer>

 </>;
}
createRoot(document.getElementById('root')).render(<App/>);
