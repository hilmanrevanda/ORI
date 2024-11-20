
(() => { if (window.BEAEPAGEJS === undefined) {
            window.BEAEPAGEJS = [];
          }

          if(window.beaePageSetting == undefined) {
            window.beaePageSetting = {};
          }
          
          window.beaePageSetting.pageId = "undefined";
              window.beaePageSetting.pageTitle = "undefined"; 
              window.beaePageSetting.pageType = "undefined";

          let js_HCJSMBIR = () => { let BeaeUseHooks = {};
      try {
        let argid = 'beae-e40nk716section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-e40nk716',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-e40nk716');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var n,l;let s=a.target;if(!s.classList.contains("beae-grid-carousel"))return;let r=Math.round((s.scrollLeft+s.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(s.offsetWidth*.8))+1;(n=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||n.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+r+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),s=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),r=[];if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(window.innerWidth>=768){if(a){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);n&&(a.innerHTML=n.html,r.push("desktop"))}}else if(s){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,s);n&&(s.innerHTML=n.html,r.push("mobile"))}}(a||s)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!r.includes("desktop")&&window.innerWidth>=768&&a){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);n&&(a.innerHTML=n.html,r.push("desktop"))}if(!r.includes("mobile")&&window.innerWidth<768&&s){const n=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,s);n&&(s.innerHTML=n.html,r.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((r,n)=>{r.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),n.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-e40nk716: ', ex)
      };
    }; if (window.BEAEBASE) {js_HCJSMBIR()} else {window.BEAEPAGEJS.push(js_HCJSMBIR)}window.addEventListener("load", () => {let brd = document.createElement("div"),id = Math.random().toString(36).substr(2, 5);brd.setAttribute(`data-${id}`, "");brd.setAttribute("style","position:fixed;bottom: 10px;left:14px;z-index:99999999999999;display:flex;align-items:center;gap:10px");brd.innerHTML = `<a href="https://apps.shopify.com/beae/?utm_source=customersite&utm_medium=page&utm_campaign=traffic" target="_blank" style="box-shadow:rgb(0 0 0 / 25%) 0px 54px 55px, rgb(0 0 0 / 12%) 0px -12px 30px, rgb(0 0 0 / 12%) 0px 4px 6px, rgb(0 0 0 / 17%) 0px 12px 13px, rgb(0 0 0 / 9%) 0px -3px 5px;background:#fafafa;border-radius: 6px;padding: 3px 8px;text-decoration: none;font-family: system-ui, arial;font-size: 12px;color: #292929;font-weight: 500;display: flex;align-items: center;letter-spacing: 0;white-space: nowrap;">Made in <img src="https://app.beae.com/dist/images/beae-next-logo-80.png" height="14" style="border-radius: 0px;margin-left:3px;height:14px !important" /></a> `;document.body.appendChild(brd);}); })(); 