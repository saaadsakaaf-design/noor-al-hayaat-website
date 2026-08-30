import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const A = "/assets/";

const products = [
  { key:"NEWMMOL", name:"NEWMOL", generic:"Paracetamol", strength:"500 mg", form:"Tablets", pack:"100 tablets / box", image:"product-newmol.jpg", tone:"blue" },
  { key:"AMOXII", name:"Amoxii", generic:"Amoxicillin", strength:"500 mg", form:"Capsules", pack:"100 capsules / box", image:null, tone:"brown" },
  { key:"NEWUXIM", name:"Newuxim", generic:"Esomeprazole", strength:"40 mg", form:"Capsules", pack:"30 capsules / box", image:null, tone:"purple" },
  { key:"METRONIDAZOLE", name:"METRONIDAZOLE", generic:"Metronidazole", strength:"500 mg", form:"Tablets", pack:"100 tablets / box", image:"product-metanidazole.jpg", tone:"gold" },
  { key:"DICLOFENAC", name:"DICLOFENAC", generic:"Diclofenac", strength:"50 mg", form:"Tablets", pack:"100 tablets / box", image:"product-diclofenac.jpg", tone:"red" },
  { key:"AZITHROMYCIN", name:"AZITHROMYCIN", generic:"Azithromycin", strength:"500 mg", form:"Tablets", pack:"10 tablets / box", image:"product-azithromycin.jpg", tone:"green" },
  { key:"IBUPROFEN", name:"IBUPROFEN", generic:"Ibuprofen", strength:"400 mg", form:"Tablets", pack:"100 tablets / box", image:"product-ibuprofen.jpg", tone:"blue" },
  { key:"CETIRIZINE", name:"CETIRIZINE", generic:"Cetirizine", strength:"10 mg", form:"Tablets", pack:"100 tablets / box", image:"product-cetirizine.jpg", tone:"pink" },
  { key:"OMEPRAZOLE", name:"OMEPRAZOLE", generic:"Omeprazole", strength:"20 mg", form:"Capsules", pack:"28 capsules / box", image:"product-omeprazole.jpg", tone:"green" },
];

const factoryImages = [
  ["factory-exterior.jpg","Our Facility","Modern pharmaceutical manufacturing facility concept."],
  ["factory-layout.jpg","Smart Layout","Efficient workflow from raw materials to finished products."],
  ["factory-production.jpg","Production","Controlled production areas designed for oral solid dosage forms."],
  ["factory-tablet-line.jpg","Compression","Tablet compression with controlled process parameters."],
  ["factory-line.jpg","Packaging Line","Blister packaging and finished-product handling."],
  ["factory-quality-control.jpg","Quality & Packaging","Inspection, documentation and professional packaging."],
  ["factory-advanced-packaging.jpg","Advanced Packaging","A future-ready packaging capability for growth."],
];

function Icon({children}) { return <span className="icon">{children}</span>; }

function App(){
  const [page,setPage] = useState("home");
  const [menu,setMenu] = useState(false);
  const go = (p) => {
    setPage(p);
    setMenu(false);
    window.scrollTo({top:0,behavior:"smooth"});
  };

  const links = [["home","Home"],["products","Products"],["factory","Our Factory"],["about","About Us"],["quality","Quality"],["contact","Contact Us"]];

  return (
    <div className="site">
      <header className="header">
        <div className="nav wrap">
          <button className="brand" onClick={()=>go("home")} aria-label="Noor Al Hayaat home">
            <img src={A+"noor-al-hayaat-logo.png"} alt="Noor Al Hayaat Pharmaceutical Industries"/>
          </button>
          <button className="menuBtn" onClick={()=>setMenu(v=>!v)} aria-label="Toggle navigation">{menu?"×":"☰"}</button>
          <nav className={menu ? "navLinks open" : "navLinks"}>
            {links.map(([id,label]) => (
              <button key={id} className={page===id ? "active":""} onClick={()=>go(id)}>{label}</button>
            ))}
            <button className="navCta" onClick={()=>go("contact")}>Partner With Us <span>↗</span></button>
          </nav>
        </div>
      </header>

      {page==="home" && <Home go={go}/>}
      {page==="products" && <Products/>}
      {page==="factory" && <Factory/>}
      {page==="about" && <About go={go}/>}
      {page==="quality" && <Quality go={go}/>}
      {page==="contact" && <Contact/>}

      <Footer go={go}/>
    </div>
  );
}

function Home({go}){
  return <>
    <section className="hero">
      <img className="heroPhoto" src={A+"factory-line.jpg"} alt="Pharmaceutical manufacturing line"/>
      <div className="heroOverlay"/>
      <div className="wrap heroContent">
        <div className="eyebrow lightText"><span/> SOMALILAND • PHARMACEUTICAL MANUFACTURING</div>
        <h1>Noor Al Hayaat Pharmaceutical Industries<br/><em>Manufacturing Health, Delivering Trust.</em></h1>
        <p>Building local pharmaceutical manufacturing capacity through focused production of quality tablets and capsules, professional packaging and a quality-first approach.</p>
        <div className="actions">
          <button className="btn gold" onClick={()=>go("products")}>Explore Our Products <span>↗</span></button>
          <button className="btn outline" onClick={()=>go("factory")}>Discover Our Factory <span>→</span></button>
        </div>
        <div className="heroStats">
          <div><strong>09+</strong><span>Product Lines</span></div>
          <div><strong>02</strong><span>Dosage Forms</span></div>
          <div><strong>2026</strong><span>Established</span></div>
          <div><strong>SL</strong><span>Made in Somaliland</span></div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="wrap">
        <div className="sectionLead">
          <div>
            <div className="eyebrow">WHO WE ARE</div>
            <h2>A focused pharmaceutical platform for a <em>healthier future.</em></h2>
          </div>
          <p>Noor Al Hayaat Pharmaceutical Industries is a Somaliland-based manufacturing initiative focused on oral solid dosage forms. Our model combines suitable pharmaceutical inputs, controlled production, quality oversight and reliable packaging.</p>
        </div>
        <div className="featureGrid">
          <Feature n="01" icon="◉" title="Tablets" text="Essential tablet medicines with consistent presentation and controlled production."/>
          <Feature n="02" icon="◍" title="Capsules" text="Capsule products designed around reliable dosing and practical patient use."/>
          <Feature n="03" icon="✓" title="Quality" text="Quality considerations integrated from materials through finished product."/>
        </div>
      </div>
    </section>

    <section className="statement">
      <div className="wrap statementInner">
        <div>
          <div className="eyebrow lightText">OUR MANUFACTURING APPROACH</div>
          <h2>From pharmaceutical input<br/>to a finished, trusted pack.</h2>
        </div>
        <button className="btn white" onClick={()=>go("factory")}>Explore Our Factory <span>↗</span></button>
      </div>
    </section>

    <section className="section productSection">
      <div className="wrap">
        <div className="sectionTop">
          <div><div className="eyebrow">PRODUCT PORTFOLIO</div><h2>Our medicines</h2></div>
          <button className="textBtn" onClick={()=>go("products")}>View all products <span>→</span></button>
        </div>
        <div className="productGrid">
          {products.slice(0,6).map(p=><ProductCard key={p.key} product={p}/>)}
        </div>
      </div>
    </section>

    <section className="factoryStrip">
      <div className="wrap">
        <div className="sectionTop">
          <div><div className="eyebrow">OUR FACILITY</div><h2>Designed for controlled manufacturing.</h2></div>
          <button className="textBtn" onClick={()=>go("factory")}>View factory <span>→</span></button>
        </div>
        <div className="imageRail">
          {factoryImages.slice(0,5).map(([img,title,text])=>(
            <article className="railCard" key={img}>
              <img src={A+img} alt={title}/>
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="wrap splitFeature">
        <div>
          <div className="eyebrow">WHY NOOR AL HAYAT</div>
          <h2>Local capability.<br/><em>Regional ambition.</em></h2>
          <p>We are developing a practical manufacturing platform that can strengthen medicine availability, create skilled employment and support responsible pharmaceutical growth in Somaliland.</p>
          <div className="checkList">
            <div>✓ Quality-oriented manufacturing</div>
            <div>✓ Tablets and capsules focus</div>
            <div>✓ Professional packaging</div>
            <div>✓ Local manufacturing capacity</div>
            <div>✓ Scalable growth model</div>
          </div>
        </div>
        <div className="featurePhoto"><img src={A+"factory-quality-control.jpg"} alt="Quality control and packaging"/></div>
      </div>
    </section>

    <section className="regional">
      <div className="wrap regionalInner">
        <div>
          <div className="eyebrow">LOCAL CAPACITY • REGIONAL AMBITION</div>
          <h2>Manufacturing closer to the communities we serve.</h2>
        </div>
        <div>
          <p>Based in Hargeisa, Somaliland, Noor Al Hayaat is designed to strengthen local pharmaceutical capacity while developing opportunities for responsible regional distribution.</p>
          <button className="btn green" onClick={()=>go("contact")}>Talk to Our Team <span>↗</span></button>
        </div>
      </div>
    </section>
  </>;
}

function Feature({n,icon,title,text}){
  return <article className="feature"><span className="featureNo">{n}</span><div className="featureIcon">{icon}</div><h3>{title}</h3><p>{text}</p></article>;
}

function ProductCard({product}){
  return <article className="productCard">
    <div className={"productVisual "+product.tone}>
      {product.image ? <img src={A+product.image} alt={product.name}/> : <div className="genericPack"><img src={A+"noor-al-hayaat-logo.png"} alt=""/><strong>Newuxim</strong><b>40</b><span>Esomeprazole</span><small>30 Capsules</small></div>}
    </div>
    <div className="productBody">
      <div className="productMeta">{product.form.toUpperCase()}</div>
      <h3>{product.name}</h3>
      <p>{product.generic} • {product.strength}</p>
      <span className="made">▾ Made in Somaliland</span>
    </div>
  </article>;
}

function Products(){
  return <PageHero kicker="PRODUCT PORTFOLIO" title="Our Products" text="A growing portfolio of essential oral solid medicines with clear product presentation and dependable manufacturing intent.">
    <div className="productCount"><span>TABLETS & CAPSULES</span><b>{products.length} PRODUCT LINES</b></div>
    <div className="productGrid allProducts">{products.map(p=><ProductCard key={p.key} product={p}/>)}</div>
  </PageHero>;
}

function Factory(){
  return <PageHero kicker="MANUFACTURING PLATFORM" title="Our Factory" text="A focused facility concept designed around efficient material flow, controlled production, quality oversight and professional final packaging.">
    <div className="factoryHero">
      <div><div className="eyebrow">FACTORY WORKFLOW</div><h2>A clear path from input to finished medicine.</h2><p>The planned manufacturing environment brings production, quality control, packaging and storage into one coherent workflow.</p></div>
      <img src={A+"factory-layout.jpg"} alt="Factory layout"/>
    </div>
    <div className="facilityCards">
      {factoryImages.map(([img,title,text],i)=><article key={img}><img src={A+img} alt={title}/><div><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></div></article>)}
    </div>
    <div className="workflow">
      {["Raw Materials","Production","Quality Control","Blister & Box Packaging","Finished Products"].map((x,i)=><React.Fragment key={x}><div><b>0{i+1}</b><span>{x}</span></div>{i<4&&<i>→</i>}</React.Fragment>)}
    </div>
  </PageHero>;
}

function About({go}){
  return <PageHero kicker="WHO WE ARE" title="About Noor Al Hayaat" text="A Somaliland-based pharmaceutical manufacturing initiative focused on quality oral solid dosage forms.">
    <div className="aboutGrid">
      <img className="aboutImage" src={A+"factory-exterior.jpg"} alt="Noor Al Hayaat pharmaceutical factory"/>
      <div><div className="eyebrow">OUR STORY</div><h2>Building local pharmaceutical capacity.</h2><p>Noor Al Hayaat Pharmaceutical Industries is focused on the manufacturing and packaging of tablets and capsules. The project is designed to combine suitable pharmaceutical inputs, controlled production, quality oversight and professional presentation.</p><p>Our ambition is to create a trusted local manufacturing platform that can serve Somaliland and develop responsible regional opportunities.</p><div className="checkList"><div>✓ Tablets & capsules focus</div><div>✓ Quality-oriented manufacturing system</div><div>✓ Modern packaging approach</div><div>✓ Local and regional market ambition</div></div></div>
    </div>
    <div className="infoGrid">
      <Info title="VISION" text="To become a trusted pharmaceutical manufacturing platform in Somaliland and the wider region."/>
      <Info title="MISSION" text="To manufacture dependable medicines while building local technical and industrial capacity."/>
      <Info title="VALUES" text="Quality, integrity, responsibility, efficiency and trust."/>
    </div>
    <div className="ctaBox"><div><div className="eyebrow">LET'S CONNECT</div><h2>Build a healthier future with us.</h2></div><button className="btn green" onClick={()=>go("contact")}>Contact Us <span>↗</span></button></div>
  </PageHero>;
}

function Quality({go}){
  return <PageHero kicker="QUALITY & RELIABILITY" title="Quality You Can Trust" text="Quality is treated as a continuous process — from incoming materials and production controls to finished-product inspection and documentation.">
    <div className="qualityTop"><img src={A+"factory-quality-control.jpg"} alt="Quality control and packaging"/><div><div className="eyebrow">QUALITY SYSTEM</div><h2>Built around control, traceability and consistency.</h2><p>Our manufacturing concept incorporates quality checkpoints across the production workflow, supporting consistent products and responsible release decisions.</p></div></div>
    <div className="qualityGrid">
      {[
        ["01","Raw Material Testing","Incoming pharmaceutical materials are checked before entering production."],
        ["02","In-Process Controls","Production parameters and process steps are monitored and documented."],
        ["03","Finished Product Testing","Finished medicines are evaluated against defined quality requirements."],
        ["04","Packaging Inspection","Labels, packs and presentation are checked before release."],
        ["05","Documentation & Traceability","Batch records and documentation support accountability throughout the workflow."],
        ["06","Continuous Improvement","Processes and capabilities can be strengthened as the facility develops."]
      ].map(([n,t,x])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{x}</p></article>)}
    </div>
    <div className="qualityCall"><div><div className="eyebrow">PARTNERSHIPS</div><h2>Looking for a reliable local pharmaceutical partner?</h2></div><button className="btn gold" onClick={()=>go("contact")}>Partner With Us <span>↗</span></button></div>
  </PageHero>;
}

function Contact(){
  const [sending,setSending]=useState(false);
  const [status,setStatus]=useState("");
  async function submit(e){
    e.preventDefault();
    setSending(true); setStatus("Sending message…");
    try{
      const fd = new FormData(e.currentTarget);
      fd.append("access_key","12f9ae3f-622b-4d0a-9112-1b2f97badeb0");
      fd.append("from_name","Noor Al Hayaat Website");
      const response = await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Accept":"application/json"},body:fd});
      const result = await response.json();
      if(result.success){ e.currentTarget.reset(); setStatus("Message sent successfully. Thank you."); }
      else setStatus(result.message || "Unable to send the message. Please try again.");
    }catch(err){ setStatus("Something went wrong. Please check your connection and try again."); }
    finally{ setSending(false); }
  }
  return <PageHero kicker="GET IN TOUCH" title="Contact Us" text="For product, partnership, supplier and general enquiries, contact the Noor Al Hayaat team.">
    <div className="contactGrid">
      <div className="contactInfo">
        <ContactItem icon="⌖" title="LOCATION" text="Hargeisa, Somaliland"/>
        <ContactItem icon="☎" title="TELEPHONE" text="+252 65 777 7021"/>
        <ContactItem icon="✉" title="EMAIL" text="info@noralhayat.com"/>
        <div className="contactNote"><b>Business enquiries</b><p>We welcome conversations with distributors, healthcare professionals, suppliers and potential partners.</p></div>
      </div>
      <form className="contactForm" onSubmit={submit}>
        <div className="formRow"><input name="name" required placeholder="Your name"/><input name="email" type="email" required placeholder="Email address"/></div>
        <input name="subject" required placeholder="Subject"/>
        <textarea name="message" required rows="7" placeholder="Your message"/>
        <button className="btn green" disabled={sending}>{sending?"Sending…":"Send Message"} {!sending&&<span>↗</span>}</button>
        {status&&<div className="formStatus">{status}</div>}
      </form>
    </div>
  </PageHero>;
}

function ContactItem({icon,title,text}){ return <div className="contactItem"><div className="contactIcon">{icon}</div><div><span>{title}</span><b>{text}</b></div></div>; }
function Info({title,text}){ return <article className="infoCard"><div className="eyebrow">{title}</div><p>{text}</p></article>; }

function PageHero({kicker,title,text,children}){
  return <main>
    <section className="pageTitle"><div className="wrap"><div className="eyebrow lightText">{kicker}</div><h1>{title}</h1><p>{text}</p></div></section>
    <section className="section pageBody"><div className="wrap">{children}</div></section>
  </main>;
}

function Footer({go}){
  return <footer>
    <div className="wrap footerGrid">
      <div className="footerBrand"><img src={A+"noor-al-hayaat-logo.png"} alt="Noor Al Hayaat"/><p>Manufacturing high-quality medicines that support healthier communities and stronger local pharmaceutical capacity.</p></div>
      <div><h4>QUICK LINKS</h4><button onClick={()=>go("home")}>Home</button><button onClick={()=>go("products")}>Products</button><button onClick={()=>go("factory")}>Our Factory</button><button onClick={()=>go("about")}>About Us</button><button onClick={()=>go("quality")}>Quality</button></div>
      <div><h4>OUR PRODUCTS</h4><span>Tablets</span><span>Capsules</span><span>Essential Medicines</span><span>Local Manufacturing</span></div>
      <div><h4>CONTACT US</h4><span>+252 65 777 7021</span><span>info@noralhayat.com</span><span>Hargeisa, Somaliland</span></div>
    </div>
    <div className="footerBottom"><span>© 2026 Noor Al Hayaat Pharmaceutical Industries. All rights reserved.</span><b>Proudly Made in Somaliland</b></div>
  </footer>;
}

createRoot(document.getElementById("root")).render(<App/>);
