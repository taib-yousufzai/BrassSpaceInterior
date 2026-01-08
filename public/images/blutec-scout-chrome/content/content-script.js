(function(){if(window.BlutecScoutInjected)return;window.BlutecScoutInjected=!0;let b=[],h={isAuthenticated:!1,subscriptionStatus:0,user:null,isLoading:!0},d={remaining:0,total:0,used:0,loading:!0,canExtract:!1},u={fileFormat:"csv",downloadMode:"entire",autoDownload:!0,downloadPath:""},$=!1,I=!1;async function L(){try{const e=await fetch("https://blutec-scout-be.blutec.ai/api/subscription/check-lead-usage",{method:"GET",headers:{Authorization:`Bearer ${await A()}`,"Content-Type":"application/json"}});if(!e.ok)return d.loading=!1,!1;const t=await e.json();return d={remaining:t.remaining||0,total:t.total||0,used:t.used||0,loading:!1,canExtract:t.canExtract||!1},!0}catch(e){return console.error("[Content] Lead usage error:",e),d.loading=!1,!1}}async function A(){return new Promise(e=>{chrome.storage.local.get(["authToken"],t=>{e(t.authToken||null)})})}async function M(e){try{const t=await fetch("https://blutec-scout-be.blutec.ai/api/subscription/increment-leads",{method:"POST",headers:{Authorization:`Bearer ${await A()}`,"Content-Type":"application/json"},body:JSON.stringify({count:e})});if(!t.ok){const a=await t.json();return console.error("[Content] Lead update failed:",a),!1}const o=await t.json();return d.remaining=o.remaining,d.used=o.used,d.canExtract=o.remaining>0,!0}catch(t){return console.error("[Content] Lead update error:",t),!1}}async function P(e=1){try{return d.loading&&await L(),d.canExtract?d.remaining<e?{allowed:!1,message:`Not enough leads remaining. You need ${e} but only have ${d.remaining} left.`,remaining:d.remaining}:{allowed:!0,remaining:d.remaining}:{allowed:!1,message:"No active subscription. Please upgrade to continue extracting leads.",remaining:0}}catch(t){return console.error("[Content] Lead limit check error:",t),{allowed:!1,message:"Failed to check lead limit. Please try again.",remaining:0}}}async function _(){try{const e=await fetch("https://blutec-scout-be.blutec.ai/api/subscription/start-trial",{method:"POST",headers:{Authorization:`Bearer ${await A()}`,"Content-Type":"application/json"}});if(!e.ok){const o=await e.json();return alert(`Failed to start trial: ${o.message}`),!1}const t=await e.json();return alert(`🎉 ${t.message}`),await L(),!0}catch(e){return console.error("[Content] Start trial error:",e),alert("Failed to start trial. Please try again."),!1}}function D(){try{chrome.runtime.sendMessage({action:"openSubscriptionPlans"})}catch(e){console.error("[Content] Failed to open subscription plans:",e),window.open("chrome-extension://"+chrome.runtime.id+"/subscription-plans.html","_blank")}}function T(){const e=document.getElementById("lead-usage-alert"),t=document.getElementById("lead-usage-count"),o=document.getElementById("lead-usage-message"),a=document.getElementById("start-scrape");if(!(!e||!t||!o)){if(d.loading){e.style.display="none";return}d.canExtract?d.remaining<=10?(e.style.display="block",e.style.borderLeftColor="#f59e0b",e.style.background="#fef3c7",t.textContent=`${d.remaining} leads remaining`,o.textContent=`You're running low on leads! Only ${d.remaining} leads remaining. Consider upgrading for more leads.`,a.disabled=!1,a.textContent="🚀 Start Scraping"):d.remaining<=50?(e.style.display="block",e.style.borderLeftColor="#f59e0b",e.style.background="#fef3c7",t.textContent=`${d.remaining} leads remaining`,o.textContent=`You have ${d.remaining} leads remaining. Consider upgrading for more leads.`,a.disabled=!1,a.textContent="🚀 Start Scraping"):(e.style.display="none",a.disabled=!1,a.textContent="🚀 Start Scraping"):(e.style.display="block",e.style.borderLeftColor="#ef4444",e.style.background="#fee2e2",t.textContent="0 leads remaining",o.textContent="You have no active subscription. Start a free trial or upgrade to continue extracting leads.",a.disabled=!0,a.textContent="❌ No Active Subscription")}}async function z(){var e;try{const t=await chrome.storage.local.get(["authToken","user"]);if(!t.authToken)return h.isAuthenticated=!1,h.isLoading=!1,!1;const o=await fetch("https://blutec-scout-be.blutec.ai/api/auth/verify-token",{method:"GET",headers:{Authorization:`Bearer ${t.authToken}`,"Content-Type":"application/json"}});if(!o.ok)return h.isAuthenticated=!1,h.isLoading=!1,!1;const a=await o.json();return h.isAuthenticated=!0,h.user=a.user||t.user,h.subscriptionStatus=((e=a.user)==null?void 0:e.subscription_status)||0,h.isLoading=!1,await L(),!0}catch(t){return console.error("[Content] Auth check error:",t),h.isAuthenticated=!1,h.isLoading=!1,!1}}async function j(){return new Promise(e=>{chrome.storage.local.get(["settings"],t=>{t.settings&&(u.fileFormat=t.settings.fileFormat||"csv",u.downloadMode=t.settings.downloadMode||"entire",u.autoDownload=t.settings.autoDownload!==!1,u.downloadPath=t.settings.downloadPath||""),e(u)})})}chrome.storage.onChanged.addListener(e=>{e.settings&&j().then(()=>{U()})});function U(){const e=document.getElementById("settings-indicator");e&&(e.innerHTML=`
        <div style="display: flex; align-items: center; gap: 2px; flex-wrap: wrap;">
          <span class="settings-badge ${u.autoDownload?"badge-green":"badge-red"}">
            ${u.autoDownload?"✓ Auto Download":"✗ Auto Download OFF"}
          </span>
          <span class="settings-badge badge-blue">${u.fileFormat.toUpperCase()}</span>
          <span class="settings-badge badge-blue">
            ${u.downloadMode==="keyword"?"Keyword Wise":"Entire File"}
          </span>
          ${u.downloadPath?`<span class="settings-badge badge-purple" title="${u.downloadPath}">📁 Custom Path</span>`:""}
        </div>
      `)}window.BlutecAPI={EARTH_RADIUS_IN_METERS:6371010,TILE_SIZE:256,SCREEN_PIXEL_HEIGHT:768,altitude(e,t){const o=27.3611*this.EARTH_RADIUS_IN_METERS*this.SCREEN_PIXEL_HEIGHT,a=t*Math.PI/180;return o*Math.cos(a)/(Math.pow(2,e)*this.TILE_SIZE)},generatePbParameter(e,t,o,a=0){return`!4m12!1m3!1d${this.altitude(o,e)}!2d${t}!3d${e}!2m3!1f0!2f0!3f0!3m2!1i1440!2i333!4f13.1!7i20!8i${a}!10b1!12m25!1m5!18b1!30b1!31m1!1b1!34e1!2m3!5m1!6e2!20e3!10b1!12b1!13b1!16b1!17m1!3e1!20m4!5e2!6b1!8b1!14b1!46m1!1b0!96b1!99b1!19m4!2m3!1i360!2i120!4i8!20m65!2m2!1i203!2i100!3m2!2i4!5b1!6m6!1m2!1i86!2i86!1m2!1i408!2i240!7m33!1m3!1e1!2b0!3e3!1m3!1e2!2b1!3e2!1m3!1e2!2b0!3e3!1m3!1e8!2b0!3e3!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e10!2b0!3e4!1m3!1e9!2b1!3e2!2b1!9b0!15m16!1m7!1m2!1m1!1e2!2m2!1i195!2i195!3i20!1m7!1m2!1m1!1e2!2m2!1i195!2i195!3i20`},getCurrentMapCoords(){try{const t=window.location.href.match(/@(-?\d+\.\d+),(-?\d+\.\d+),(\d+\.?\d*)z/);return t?{latitude:parseFloat(t[1]),longitude:parseFloat(t[2]),zoom:parseFloat(t[3])}:{latitude:23.0225,longitude:72.5714,zoom:12}}catch{return{latitude:23.0225,longitude:72.5714,zoom:12}}},async fetchPageData(e,t,o,a,n){try{const g=`https://www.google.com/search?tbm=map&authuser=0&hl=en&gl=in&pb=${this.generatePbParameter(t,o,a,n)}&q=${encodeURIComponent(e)}`,y=await fetch(g,{method:"GET",credentials:"include",headers:{Accept:"text/html","User-Agent":navigator.userAgent}});return y.ok?await y.text():{results:[]}}catch(l){return console.error("[API] Error:",l),{results:[]}}},async batchScrapeWebsites(e){const t=e.filter(i=>i.website).map(i=>i.website);if(t.length===0)return;const o=5,a=10,n=[];for(let i=0;i<t.length;i+=o)n.push(t.slice(i,i+o));const l=document.getElementById("progress-fill"),g=document.getElementById("progress-text"),y=document.getElementById("scraping-text");for(let i=0;i<n.length&&!k;i+=a){$=!0;const m=n.slice(i,i+a),r=10+Math.floor((i+m.length)/n.length*90);l&&(l.style.width=`${r}%`),g&&(g.textContent=`${r}%`),y&&(y.textContent=`⚡ Processing ${m.length} batches in parallel (${i+1}-${i+m.length}/${n.length})...`);try{const p=m.map((x,s)=>{const C=i+s;return new Promise(w=>{chrome.runtime.sendMessage({action:"fetchWebsite",websites:x},f=>{w({batchIndex:C,response:f||{success:!1},batch:x})})})}),S=await Promise.all(p);$=!1,S.forEach(({batchIndex:x,response:s,batch:C})=>{if(!s.success){console.error(`[Scraper] Batch ${x+1} failed:`,s.error);return}const w=s.results||[];let f=0;w.forEach(E=>{if(E.success&&E.emails&&E.emails.length>0){const c=e.find(Z=>Z.website===E.url);c&&(!c.emails||c.emails.length===0)&&(c.emails=E.emails,f++)}})});const v=document.getElementById("email-count");if(v){const x=e.filter(s=>s.emails&&s.emails.length>0).length;v.textContent=`${x} email`}const B=10+Math.floor((i+m.length)/n.length*90);l&&(l.style.width=`${B}%`),g&&(g.textContent=`${B}%`),i+a<n.length&&await new Promise(x=>setTimeout(x,1e3))}catch(p){$=!1,console.error(`[Scraper] Error processing parallel batches starting at ${i+1}:`,p)}}e.filter(i=>i.emails&&i.emails.length>0).length}};async function R(){if(!(document.getElementById("blutec-nano-modal")||I)){I=!0;try{if(!await z()){I=!1;return}if(h.subscriptionStatus===0){I=!1;return}const t=window.location.href;let o="";if(t.includes("/maps/search/"))try{o=decodeURIComponent(t.split("/maps/search/")[1].split("/")[0].replace(/\+/g," "))}catch{}const a=chrome.runtime.getURL("logo.png"),n=document.createElement("div");n.id="blutec-nano-modal",n.style.cssText=`
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 400px;
      background: white;
      border-radius: 16px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      z-index: 999999;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      overflow: hidden;
      animation: slideInUp 0.3s ease;
    `,n.innerHTML=`
      <style>
        @keyframes slideInUp {
          from { transform: translateY(100px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        
        .settings-badge {
          padding: 2px 6px;
          border-radius: 6px;
          font-size: 10px;
          font-weight: 600;
          display: inline-block;
          margin: 2px;
        }
        .badge-green { background: #10b981; color: white; }
        .badge-red { background: #ef4444; color: white; }
        .badge-blue { background: #3b82f6; color: white; }
        .badge-purple { background: #8b5cf6; color: white; }
      </style>
      
      <div style="background: linear-gradient(135deg, #19cafc 0%, #0ea5e9 100%); padding: 16px; color: white; position: relative;">
        <div style="position: absolute; top: -10px; right: -10px; width: 60px; height: 60px; background: rgba(255,255,255,0.1); border-radius: 50%;"></div>
        
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px; position: relative; z-index: 1;">
           <div style="width: 40px; height: 40px; background: rgba(255,255,255,0.9); border-radius: 8px; display: flex; align-items: center; justify-content: center; padding: 4px;">
            <img src="${a}" alt="Blutec Scout" style="width: 100%; height: 100%; object-fit: contain;">
          </div>
          <div>
            <h2 style="margin: 0; font-size: 18px; font-weight: 700;">If it Exists, You can find it</h2>
          </div>
        </div>
        
        <button id="close-modal" style="position: absolute; top: 12px; right: 12px; background: none; border: none; color: white; font-size: 20px; cursor: pointer; opacity: 0.7; transition: opacity 0.2s; padding: 4px;">&times;</button>
      </div>

      <div style="padding: 16px;">
        <div style="margin-bottom: 12px; padding: 10px; background: #f1f5f9; border-radius: 8px;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
            <span style="font-size: 11px; font-weight: 600; color: #475569;">⚙️ Download Settings:</span>
          </div>
          <div id="settings-indicator" style="font-size: 10px;"></div>
        </div>
        
        <div style="margin-bottom: 16px;">
          <label style="display: block; font-weight: 600; margin-bottom: 6px; color: #334155; font-size: 13px;">Search Query</label>
          <input type="text" id="blutec-query" value="${o}" placeholder="restaurants in Mumbai" style="width: 100%; padding: 12px 14px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 14px; transition: border-color 0.2s; box-sizing: border-box;" onfocus="this.style.borderColor='#19cafc'" onblur="this.style.borderColor='#e2e8f0'">
        </div>
        
        <div id="lead-usage-alert" style="display: none; margin-bottom: 16px; padding: 12px; border-radius: 8px; border-left: 4px solid #f59e0b; background: #fef3c7;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="font-size: 16px;">⚠️</span>
              <span style="font-weight: 600; color: #92400e; font-size: 13px;">Lead Limit Alert</span>
            </div>
            <span id="lead-usage-count" style="font-size: 11px; color: #92400e; font-weight: 600;"></span>
          </div>
          <div id="lead-usage-message" style="font-size: 11px; color: #92400e; margin-bottom: 8px;"></div>
          <div style="display: flex; gap: 6px;">
            <button id="start-trial-btn" style="padding: 6px 12px; background: #10b981; color: white; border: none; border-radius: 6px; font-size: 11px; font-weight: 600; cursor: pointer;">Start Free Trial</button>
            <button id="upgrade-btn" style="padding: 6px 12px; background: #3b82f6; color: white; border: none; border-radius: 6px; font-size: 11px; font-weight: 600; cursor: pointer;">Upgrade Plan</button>
          </div>
        </div>

        <div style="margin-bottom: 16px;">
          <label style="display: flex; align-items: center; cursor: pointer; padding: 12px; background: #f8fafc; border-radius: 8px; transition: background 0.2s;" onmouseover="this.style.background='#f1f5f9'" onmouseout="this.style.background='#f8fafc'">
            <input type="checkbox" id="scrape-emails" checked style="width: 16px; height: 16px; margin-right: 10px; cursor: pointer;">
            <div>
              <span style="font-weight: 600; color: #334155; font-size: 13px; display: block;">Scrape Emails & Social (ULTRA-FAST)</span>
              <small style="color: #64748b; font-size: 10px;">⚡ 10x parallel processing - Scrapes 50 sites simultaneously</small>
            </div>
          </label>
        </div>
        
        <button id="start-scrape" style="width: 100%; padding: 12px; background: linear-gradient(135deg, #19cafc, #0ea5e9); color: white; border: none; border-radius: 8px; font-weight: 700; font-size: 14px; cursor: pointer; margin-bottom: 12px; box-shadow: 0 4px 12px rgba(25, 202, 252, 0.3); transition: transform 0.2s;" onmouseover="this.style.transform='translateY(-1px)'" onmouseout="this.style.transform='translateY(0)'">🚀 Start Scraping</button>
        
        <button id="stop-scrape" style="display: none; width: 100%; padding: 12px; background: linear-gradient(135deg, #ef4444, #dc2626); color: white; border: none; border-radius: 8px; font-weight: 700; font-size: 14px; cursor: pointer; margin-bottom: 12px; box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3); transition: transform 0.2s;" onmouseover="this.style.transform='translateY(-1px)'" onmouseout="this.style.transform='translateY(0)'">⏹️ Stop Scraping</button>
        
        <div id="status" style="padding: 12px; background: #f1f5f9; border-left: 4px solid #19cafc; border-radius: 8px; font-size: 12px; color: #475569;">Ready to extract leads with full details</div>
        
        <div id="progress" style="display: none; margin-top: 12px;">
          <div style="background: #e2e8f0; height: 6px; border-radius: 3px; overflow: hidden;">
            <div id="progress-fill" style="background: linear-gradient(90deg, #19cafc, #0ea5e9); height: 100%; width: 0%; transition: width 0.4s;"></div>
          </div>
          <p id="progress-text" style="margin-top: 6px; font-size: 12px; text-align: center; color: #64748b; font-weight: 600;">0%</p>
        </div>

        <div id="log"></div>
        
        <div id="scraping-status" style="display: none; margin-top: 12px; padding: 10px; background: #fef3c7; border-left: 4px solid #f59e0b; border-radius: 8px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <div style="width: 14px; height: 14px; border: 2px solid #f59e0b; border-top-color: transparent; border-radius: 50%; animation: spin 1s linear infinite;"></div>
            <span id="scraping-text" style="font-size: 11px; color: #92400e; font-weight: 600;">⚡ Ultra-fast parallel scraping...</span>
          </div>
        </div>
        
        <div id="results" style="display: none; margin-top: 16px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <strong style="font-size: 13px;">📊 Results</strong>
            <span id="result-count" style="background: #19cafc; color: white; padding: 3px 8px; border-radius: 10px; font-size: 11px; font-weight: 700;">0</span>
          </div>
          <div style="display: flex; gap: 4px; margin-bottom: 10px; flex-wrap: wrap;">
            <span id="phone-count" style="background: #10b981; color: white; padding: 2px 6px; border-radius: 6px; font-size: 10px;">0 phone</span>
            <span id="website-count" style="background: #6366f1; color: white; padding: 2px 6px; border-radius: 6px; font-size: 10px;">0 web</span>
            <span id="email-count" style="background: #f59e0b; color: white; padding: 2px 6px; border-radius: 6px; font-size: 10px;">0 email</span>
          </div>
          <div id="results-preview" style="max-height: 200px; overflow-y: auto; border: 2px solid #e2e8f0; border-radius: 8px; padding: 8px; margin-bottom: 10px;"></div>
          <button id="export-btn" style="width: 100%; padding: 8px; background: linear-gradient(135deg, #10b981, #059669); color: white; border: none; border-radius: 8px; font-weight: 700; font-size: 12px; cursor: pointer;">📥 Export CSV</button>
        </div>
      </div>
    `,document.body.appendChild(n),j().then(()=>{U()}),document.getElementById("close-modal").addEventListener("click",()=>{n.style.animation="slideInUp 0.3s ease reverse",setTimeout(()=>n.remove(),300)}),document.getElementById("start-scrape").addEventListener("click",Y),document.getElementById("stop-scrape").addEventListener("click",N),document.getElementById("start-trial-btn").addEventListener("click",async()=>{await _()&&T()}),document.getElementById("upgrade-btn").addEventListener("click",D),T(),I=!1}catch(e){console.error("[Content] Error injecting modal:",e),I=!1}}}let H=!1,k=!1;async function N(){k=!0;const e=document.getElementById("status"),t=document.getElementById("stop-scrape"),o=document.getElementById("scraping-status"),a=document.getElementById("scraping-text");if($){e.textContent="⏹️ Stopping... waiting for current batch to complete",e.style.borderLeftColor="#f59e0b",e.style.background="#fef3c7",t.disabled=!0,t.textContent="⏹️ Stopping...",a&&(a.textContent="⏹️ Stopping batch processing...");const n=6e4,l=500,g=Date.now();for(;$&&!(Date.now()-g>n);)await new Promise(y=>setTimeout(y,l))}e.textContent="⏹️ Scraping stopped by user",e.style.borderLeftColor="#ef4444",e.style.background="#fee2e2",t.disabled=!0,t.textContent="⏹️ Stopped",o.style.display==="block"&&(a.textContent="⏹️ Scraping stopped")}function O(e){if(!e)return"";const t=e.match(/^\+(\d{1,3})/);return t?`+${t[1]}`:""}async function Y(){if(!await z()||h.subscriptionStatus===0){alert(`⚠️ Subscription expired or inactive.

Please renew your subscription to continue.`);return}const t=document.getElementById("blutec-query").value.trim(),o=document.getElementById("scrape-emails").checked;if(!t){alert("Please enter a search query");return}const a=await P(1);if(!a.allowed){alert(`⚠️ ${a.message}`),T();return}H=!0,k=!1;const n=document.getElementById("status"),l=document.getElementById("progress"),g=document.getElementById("progress-fill"),y=document.getElementById("progress-text"),i=document.getElementById("results"),m=document.getElementById("start-scrape"),r=document.getElementById("stop-scrape"),p=document.getElementById("scraping-status"),S=document.getElementById("scraping-text");m.style.display="none",r.style.display="block",r.disabled=!1,r.textContent="⏹️ Stop Scraping",n.textContent="🔍 Gathering Google leads...",n.style.borderLeftColor="#f59e0b",n.style.background="#fef3c7",l.style.display="none";try{let v=[];const B=window.BlutecAPI.getCurrentMapCoords();let x=0;for(;x<50&&!k;){const s=await P(1);if(!s.allowed)break;const C=x*20,w=await window.BlutecAPI.fetchPageData(t,B.latitude,B.longitude,B.zoom,C);let f=[];try{const c=await chrome.runtime.sendMessage({action:"parseData",data:w});c&&c.success&&(f=c.data||[])}catch(c){console.error("[Content] Error:",c)}if(f.length===0)break;const E=Math.min(f.length,s.remaining);if(E>0){if(!await M(E))break;v.push(...f.slice(0,E))}x++,await new Promise(c=>setTimeout(c,100))}if(v=v.map(s=>({placeId:s.cid,name:s.title,phone:s.phone,phoneCountryCode:O(s.phone),website:s.webSite,address:s.address,category:s.category,rating:s.reviewRating,reviewCount:s.reviewCount,latitude:s.latitude,longitude:s.longitude,thumbnail:s.thumbnail,mondayHours:s.openHours.Monday?s.openHours.Monday.join(", "):"",tuesdayHours:s.openHours.Tuesday?s.openHours.Tuesday.join(", "):"",wednesdayHours:s.openHours.Wednesday?s.openHours.Wednesday.join(", "):"",thursdayHours:s.openHours.Thursday?s.openHours.Thursday.join(", "):"",fridayHours:s.openHours.Friday?s.openHours.Friday.join(", "):"",saturdayHours:s.openHours.Saturday?s.openHours.Saturday.join(", "):"",sundayHours:s.openHours.Sunday?s.openHours.Sunday.join(", "):"",timezone:s.timezone,completeAddress:s.completeAddress,directionUrl:`https://www.google.com/maps?q=${encodeURIComponent(s.latitude+","+s.longitude)}`,emails:[]})),b=G(v),o&&!k){l.style.display="block",p.style.display="block",g.style.width="10%",y.textContent="10%",n.textContent="🌐 Scraping emails in parallel batches...",S.textContent="⚡ Starting parallel batch scraping...",i.style.display="block";const s=b.filter(w=>w.phone).length,C=b.filter(w=>w.website).length;document.getElementById("result-count").textContent=b.length,document.getElementById("phone-count").textContent=`${s} phone`,document.getElementById("website-count").textContent=`${C} web`,document.getElementById("email-count").textContent="0 email",await window.BlutecAPI.batchScrapeWebsites(b),g.style.width="100%",y.textContent="100%",S.textContent="✅ Email scraping completed!"}setTimeout(()=>{l.style.display="none",p.style.display="none";const s=b.filter(c=>c.phone).length,C=b.filter(c=>c.website).length,w=b.filter(c=>c.emails.length>0).length;n.textContent=`✅ Extraction completed! Found ${b.length} leads (${s} phone, ${C} website, ${w} email)`,n.style.borderLeftColor="#10b981",n.style.background="#d1fae5",i.style.display="block",document.getElementById("result-count").textContent=b.length,document.getElementById("phone-count").textContent=`${s} phone`,document.getElementById("website-count").textContent=`${C} web`,document.getElementById("email-count").textContent=`${w} email`,H=!1,k=!1,m.style.display="block",r.style.display="none",W(b),T();const f=document.getElementById("export-btn");f.textContent=u.autoDownload?`📥 Export ${u.fileFormat.toUpperCase()}`:"⚠️ Auto Download OFF";const E=f.cloneNode(!0);f.parentNode.replaceChild(E,f),E.addEventListener("click",()=>q(b))},500)}catch(v){console.error("[Content] Error:",v),n.textContent="❌ Error: "+v.message,n.style.borderLeftColor="#ef4444",n.style.background="#fee2e2",H=!1,k=!1,m.style.display="block",r.style.display="none",l.style.display="none",p.style.display="none"}}function W(e){const t=document.getElementById("results-preview");t.innerHTML=e.slice(0,15).map((o,a)=>`
        <div style="padding:14px;border-bottom:1px solid #e2e8f0;">
          <strong style="color:#1e40af;">${a+1}. ${o.name}</strong><br>
          <small style="color:#64748b;">📍 ${o.address||"N/A"}</small>
          ${o.phone?`<br><small style="color:#10b981;">📞 ${o.phone}</small>`:""}
          ${o.emails&&o.emails.length>0?`<br><small style="color:#f59e0b;">📧 ${o.emails.join("; ")}</small>`:""}
        </div>
      `).join("")}function G(e){const t=new Set;return e.filter(o=>!(o!=null&&o.placeId)||t.has(o.placeId)?!1:(t.add(o.placeId),!0))}function q(e){if(!e||e.length===0){alert("No results to export");return}if(!u.autoDownload){alert(`⚠️ Auto Download is disabled.

Please enable it in Settings.`);return}const t=new Date().toISOString().slice(0,10);u.fileFormat==="csv"?X(e,t):J(e,t)}function X(e,t){const o=["Place ID","Name","Phone","phoneCountryCode","Website","Emails","Category","Address","Rating","Reviews","latitude","longitude","directionUrl","thumbnail","mondayHours","tuesdayHours","wednesdayHours","thursdayHours","fridayHours","saturdayHours","sundayHours","timezone"],a=r=>String(r).replace(/\u00A0/g," ").replace(/[\u200B-\u200F]/g,"").replace(/\t/g," ").trim(),n=r=>{if(r==null)return"";const p=a(String(r)).replace(/"/g,'""');return p.includes(",")||p.includes(`
`)||p.includes('"')?`"${p}"`:p},g="\uFEFF"+[o.join(","),...e.map((r,p)=>{var S;return[n(r.placeId),n(r.name),n(r.phone),n(r.phoneCountryCode),n(r.website),n((S=r.emails)!=null&&S.length?r.emails.join(" | "):""),n(r.category),n(r.address),n(r.rating),n(r.reviewCount),n(r.latitude),n(r.longitude),n(r.directionUrl),n(r.thumbnail),n(r.mondayHours),n(r.tuesdayHours),n(r.wednesdayHours),n(r.thursdayHours),n(r.fridayHours),n(r.saturdayHours),n(r.sundayHours),n(r.timezone)].join(",")})].join(`
`),y=new Blob([g],{type:"text/csv;charset=utf-8"}),i=URL.createObjectURL(y),m=document.createElement("a");m.href=i,m.download=`blutec_scout_${t}_${e.length}_leads.csv`,m.click(),URL.revokeObjectURL(i)}function J(e,t){const o=JSON.stringify(e,null,2),a=new Blob([o],{type:"application/json"}),n=URL.createObjectURL(a),l=document.createElement("a");l.href=n,l.download=`blutec_scout_${t}_${e.length}_leads.json`,l.click(),URL.revokeObjectURL(n)}setTimeout(async()=>{window.location.href.includes("/maps/search/")&&await R()},2e3);let F=location.href;new MutationObserver(()=>{const e=location.href;e!==F&&(F=e,e.includes("/maps/search/")&&setTimeout(R,1e3))}).observe(document,{subtree:!0,childList:!0})})();
