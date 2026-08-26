import React,{useState}from"react";
import{createRoot}from"react-dom/client";
const Icon=({symbol,size=20})=><span className="iconmark" style={{fontSize:Math.max(12,size*.78),width:size,height:size}}>{symbol}</span>;
const Menu=({size=20})=><Icon symbol="☰" size={size}/>;
const X=({size=20})=><Icon symbol="×" size={size}/>;
const ArrowUpRight=({size=20})=><Icon symbol="↗" size={size}/>;
const ShieldCheck=({size=20})=><Icon symbol="✓" size={size}/>;
const Factory=({size=20})=><Icon symbol="⌂" size={size}/>;
const Pill=({size=20})=><Icon symbol="◉" size={size}/>;
const Capsule=({size=20})=><Icon symbol="◍" size={size}/>;
const MapPin=({size=20})=><Icon symbol="⌖" size={size}/>;
const Phone=({size=20})=><Icon symbol="☎" size={size}/>;
const Mail=({size=20})=><Icon symbol="✉" size={size}/>;
const ChevronRight=({size=20})=><Icon symbol="›" size={size}/>;
const CheckCircle2=({size=20})=><Icon symbol="✓" size={size}/>;
const Globe2=({size=20})=><Icon symbol="◎" size={size}/>;
import"./styles.css";

const products=[
["PARACETAMOL","Paracetamol","500 mg","Tablets","100 tablets / box"],
["AMOXICILLIN","Amoxicillin","500 mg","Capsules","100 capsules / box"],
["AZITHROMYCIN","Azithromycin","500 mg","Tablets","10 tablets / box"],
["METRONIDAZOLE","Metronidazole","500 mg","Tablets","100 tablets / box"],
["DICLOFENAC","Diclofenac","50 mg","Tablets","100 tablets / box"],
["ESOMEPRAZOLE","Esomeprazole","40 mg","Tablets","28 tablets / box"],
["OMEPRAZOLE","Omeprazole","20 mg","Capsules","28 capsules / box"],
["CETIRIZINE","Cetirizine","10 mg","Tablets","100 tablets / box"],
["IBUPROFEN","Ibuprofen","400 mg","Tablets","96 tablets / box"]
];

function App(){
 const[p,setP]=useState("home"),[menu,setMenu]=useState(false);
 const go=x=>{setP(x);setMenu(false);window.scrollTo({top:0,behavior:"smooth"})};
 return <div>
  <header><div className="navwrap">
   <button className="logo" onClick={()=>go("home")}><img src="/assets/noor-al-hayaat-logo.png" alt="Noor Al Hayaat Pharmaceutical Industries"/></button>
   <button className="hamb" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button>
   <nav className={menu?"open":""}>{[["home","Home"],["products","Products"],["about","About Us"],["factory","Our Factory"],["contact","Contact"]].map(([x,l])=><button className={p===x?"sel":""} onClick={()=>go(x)} key={x}>{l}</button>)}<button className="navbtn" onClick={()=>go("contact")}>Partner With Us <ArrowUpRight size={15}/></button></nav>
  </div></header>
  {p==="home"&&<Home go={go}/>}
  {p==="products"&&<Products/>}{p==="about"&&<About go={go}/>}
  {p==="factory"&&<FactoryPage/>}{p==="contact"&&<Contact/>}
  <Footer go={go}/>
 </div>
}

function Home({go}){return <>
 <section className="hero"><div className="heroimage"/><div className="heroShade"/><div className="wrap heroIn">
  <div className="heroKicker"><span/>SOMALILAND • PHARMACEUTICAL MANUFACTURING</div>
  <h1>Manufacturing Health,<br/><i>Delivering Trust.</i></h1>
  <p>Local production of quality tablets and capsules, using pharmaceutical Direct Compression (DC) materials and a quality-focused manufacturing model.</p>
  <div className="buttons"><button className="btn primary" onClick={()=>go("products")}>Explore Products <ArrowUpRight/></button><button className="btn ghost" onClick={()=>go("about")}>Discover Noor Al Hayat</button></div>
  <div className="metrics"><div><b>09+</b><span>Initial Product Lines</span></div><div><b>02</b><span>Dosage Forms</span></div><div><b>2026</b><span>Established</span></div></div>
 </div></section>

 <section className="section"><div className="wrap">
  <div className="intro"><div><label>OUR PURPOSE</label><h2>A focused pharmaceutical platform,<br/><i>built for reliability.</i></h2></div><p>Noor Al Hayat is being developed around a focused portfolio of oral solid dosage forms. Our model brings together appropriate pharmaceutical inputs, controlled processes, quality oversight and professional packaging.</p></div>
  <div className="focusgrid">
   <Focus icon={<Pill/>} n="01" title="Tablets" text="Essential tablet medicines with consistent presentation and controlled production."/>
   <Focus icon={<Capsule/>} n="02" title="Capsules" text="Capsule products designed around reliable dosing and practical patient use."/>
   <Focus icon={<ShieldCheck/>} n="03" title="Quality" text="Quality considerations integrated from materials through finished product."/>
  </div>
 </div></section>

 <section className="darkband"><div className="wrap bandin"><div><label>OUR MANUFACTURING APPROACH</label><h2>From pharmaceutical input<br/>to a finished, trusted pack.</h2></div><button className="btn light" onClick={()=>go("factory")}>Explore Our Factory <ArrowUpRight/></button></div></section>

 <section className="section productsHome"><div className="wrap"><div className="sectiontop"><div><label>PRODUCT PORTFOLIO</label><h2>Selected medicines</h2></div><button onClick={()=>go("products")} className="more">View all products <ChevronRight/></button></div><div className="prodgrid">{products.slice(0,6).map((p,i)=><Product key={i} data={p}/>)}</div></div></section>

 <section className="model"><div className="wrap">
  <div className="sectiontop"><div><label>OUR PRODUCTION MODEL</label><h2>Local production, scalable growth.</h2></div></div>
  <div className="modelgrid">
    <article><span>01</span><h3>Local production using DC materials</h3><p>Import Direct Compression pharmaceutical materials, perform local tablet compression and capsule filling, then complete quality control and professional packaging.</p></article>
    <article><span>02</span><h3>Expansion & growth</h3><p>Increase production capacity, expand the product portfolio, strengthen distribution and improve packaging capabilities as the business grows.</p></article>
    <article><span>03</span><h3>Advanced manufacturing development</h3><p>Gradually introduce additional ready-to-compress and ready-to-fill formulations, technology transfer and deeper local manufacturing capability.</p></article>
  </div>
</div></section>

<section className="market"><div className="wrap marketin"><div><label>LOCAL CAPACITY • REGIONAL AMBITION</label><h2>Manufacturing closer<br/>to the communities we serve.</h2></div><div className="marketcopy"><p>Based in Hargeisa, Somaliland, Noor Al Hayat is designed to strengthen local pharmaceutical capacity while developing opportunities for responsible regional distribution.</p><button className="btn primary" onClick={()=>go("contact")}>Talk to Our Team <ArrowUpRight/></button></div></div></section>
 </>}

function Focus({icon,n,title,text}){return <article className="focus"><span className="num">{n}</span><div className="ficon">{icon}</div><h3>{title}</h3><p>{text}</p></article>}
function Product({data}){return <article className="product"><div className="pack"><div className="packfront"><span>NOOR AL HAYAT</span><strong>{data[0]}</strong><small>{data[2]} • {data[3]}</small><em>{data[4]}</em></div></div><div className="pbody"><span>{data[3]}</span><h3>{data[0]}</h3><p>{data[1]} • {data[2]}</p></div></article>}

function Products(){return <Page kicker="PRODUCT PORTFOLIO" title="Our Products" text="A growing portfolio of essential oral solid medicines, presented with a clear focus on quality and dependable supply."><div className="productintro"><span>TABLETS & CAPSULES</span><b>{products.length} PRODUCT LINES</b></div><div className="prodgrid">{products.map((p,i)=><Product data={p} key={i}/>)}</div></Page>}

function About({go}){return <Page kicker="WHO WE ARE" title="About Noor Al Hayat" text="A Somaliland-based pharmaceutical manufacturing initiative focused on quality oral solid dosage forms.">
 <div className="split"><div className="visual"><div className="seal">NH<small>NOOR AL HAYAT</small></div><span>HARGEISA • SOMALILAND</span></div><div><label>OUR STORY</label><h2>Building local pharmaceutical capacity.</h2><p>Noor Al Hayat Pharmaceutical Industries is focused on the manufacturing and packaging of tablets and capsules. The project is designed to combine suitable pharmaceutical inputs, controlled production, quality oversight and professional presentation.</p><p>Our ambition is to create a trusted local manufacturing platform that can serve the Somaliland market and develop responsible regional opportunities.</p><div className="checks"><Check t="Tablets & capsules focus"/><Check t="Quality-oriented manufacturing system"/><Check t="Modern packaging approach"/><Check t="Local and regional market ambition"/></div></div></div>
 <div className="impactgrid">
  <article><label>HEALTHCARE IMPACT</label><p>Improved access to essential medicines, greater availability and stronger medicine security.</p></article>
  <article><label>ECONOMIC IMPACT</label><p>Local pharmaceutical production, skilled technical jobs, reduced dependence on imported finished products and industrial development.</p></article>
  <article><label>COMMUNITY IMPACT</label><p>Improved public health, greater access to treatment and sustainable local development.</p></article>
</div>
<div className="three"><Info t="VISION" x="To become a trusted pharmaceutical manufacturing platform in Somaliland and the wider region."/><Info t="MISSION" x="To manufacture dependable medicines while building local technical and industrial capacity."/><Info t="VALUES" x="Quality, integrity, responsibility, efficiency and trust." /></div>
 <div className="cta"><div><label>LET'S CONNECT</label><h2>Build a healthier future with us.</h2></div><button className="btn primary" onClick={()=>go("contact")}>Contact Us <ArrowUpRight/></button></div>
 </Page>}
function Check({t}){return <div><CheckCircle2 size={18}/>{t}</div>}
function Info({t,x}){return <article className="info"><label>{t}</label><p>{x}</p></article>}

function FactoryPage(){return <Page kicker="MANUFACTURING PLATFORM" title="Our Factory" text="A focused facility concept designed around efficient material flow, controlled production and professional final packaging.">
 <div className="factoryintro"><div><label>FACTORY WORKFLOW</label><h2>A clear path from input<br/>to finished medicine.</h2><p>The planned manufacturing environment brings production, quality control, packaging and storage into one coherent workflow.</p></div><div className="flow">{["Raw Materials","Production","Quality Control","Blister & Box Packaging","Finished Products"].map((x,i)=><React.Fragment key={x}><div><b>0{i+1}</b><span>{x}</span></div>{i<4&&<ChevronRight/>}</React.Fragment>)}</div></div>
 <div className="facilitygrid">{["Production Area","Quality Control Laboratory","Packaging Area","Raw Material Storage","Finished Products Storage","Administration & Support"].map((x,i)=><article className="facility" key={x}><small>0{i+1}</small><div className="ficon"><Factory/></div><h3>{x}</h3><p>Dedicated space within the planned pharmaceutical manufacturing workflow.</p></article>)}</div>
 <div className="location"><div><label>LOCATION</label><h2>Hargeisa, Somaliland</h2><p>The factory is planned to serve the Somaliland market while developing opportunities for regional distribution.</p><div className="locfacts"><span><MapPin/>Hargeisa</span><span><Globe2/>Regional ambition</span></div></div><div className="map"><MapPin size={40}/><b>NOOR AL HAYAT</b><span>Factory location</span></div></div>
 </Page>}

function Contact(){
 const[status,setStatus]=useState("");
 const[sending,setSending]=useState(false);

 const onSubmit=async e=>{
  e.preventDefault();
  setSending(true);
  setStatus("Sending message...");

  try{
   const formData=new FormData(e.currentTarget);

   formData.append(
    "access_key",
    "12f9ae3f-622b-4d0a-9112-1b2f97badeb0"
   );

   formData.append(
    "subject",
    "New Contact Message - Noor Al Hayat Website"
   );

   const object=Object.fromEntries(formData);

   const response=await fetch(
    "https://api.web3forms.com/submit",
    {
     method:"POST",
     headers:{
      "Content-Type":"application/json",
      Accept:"application/json"
     },
     body:JSON.stringify(object)
    }
   );

   const result=await response.json();

   if(result.success){
    setStatus("Message sent successfully. Thank you!");
    e.currentTarget.reset();
   }else{
    setStatus(
     result.message ||
     "Unable to send the message. Please try again."
    );
   }

  }catch(error){
   setStatus(
    "Something went wrong. Please check your connection and try again."
   );
  }finally{
   setSending(false);
  }
 };

 return <Page
  kicker="GET IN TOUCH"
  title="Contact Us"
  text="For product, partnership, supplier and general enquiries, contact the Noor Al Hayat team."
 >
  <div className="contact">

   <div className="contactcards">
    <ContactCard
     icon={<MapPin/>}
     t="LOCATION"
     x="Hargeisa, Somaliland"
    />

    <ContactCard
     icon={<Phone/>}
     t="TELEPHONE"
     x="+252 65 777 7021"
    />

    <ContactCard
     icon={<Mail/>}
     t="EMAIL"
     x="info@noralhayat.com"
    />
   </div>

   <form onSubmit={onSubmit}>

    <div className="row">
     <input
      name="name"
      required
      placeholder="Your name"
     />

     <input
      name="email"
      type="email"
      required
      placeholder="Email address"
     />
    </div>

    <input
     name="subject"
     required
     placeholder="Subject"
    />

    <textarea
     name="message"
     required
     rows="7"
     placeholder="Your message"
    />

    <button
     className="btn primary"
     type="submit"
     disabled={sending}
    >
     {sending ? "Sending..." : "Send Message"}
     {!sending && <ArrowUpRight/>}
    </button>

    {status && (
     <p style={{
      marginTop:"14px",
      fontWeight:600
     }}>
      {status}
     </p>
    )}

   </form>
  </div>
 </Page>
}
function ContactCard({icon,t,x}){return <div className="contactcard"><div className="ficon">{icon}</div><div><label>{t}</label><b>{x}</b></div></div>}

function Page({kicker,title,text,children}){return <><section className="pagehero"><div className="wrap"><label>{kicker}</label><h1>{title}</h1><p>{text}</p></div></section><section className="section"><div className="wrap">{children}</div></section></>}
function Footer({go}){return <footer><div className="wrap foot"><div><button className="logo flogo" onClick={()=>go("home")}><img src="/assets/noor-al-hayaat-logo.png" alt="Noor Al Hayaat Pharmaceutical Industries"/></button><p>Manufacturing Health, Delivering Trust.</p></div><div><label>EXPLORE</label><button onClick={()=>go("products")}>Products</button><button onClick={()=>go("about")}>About Us</button><button onClick={()=>go("factory")}>Our Factory</button></div><div><label>CONTACT</label><span>Hargeisa, Somaliland</span><span>+252 65 777 7021</span><span>info@noralhayat.com</span></div></div><div className="copy">© 2026 Noor Al Hayat Pharmaceutical Industries <span/> Manufacturing Health, Delivering Trust.</div></footer>}
createRoot(document.getElementById("root")).render(<App/>);
