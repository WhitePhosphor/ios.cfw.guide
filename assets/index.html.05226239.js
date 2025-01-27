import{_ as s,r as a,o as d,c as p,a as l,b as o,d as i,w as r,e as u}from"./app.4eb44126.js";const g={},h={class:"custom-container danger"},c={href:"https://sideloadly.io/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.apple.com/itunes/download/win64",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/straight-tamago/TrollMisaka/releases/latest",target:"_blank",rel:"noopener noreferrer"};function y(T,e){const t=a("router-link"),n=a("ExternalLinkIcon");return d(),p("div",null,[l("div",h,[e[14]||(e[14]=l("p",{class:"custom-container-title"},"DANGER",-1)),e[15]||(e[15]=l("p",null,"This method is extremely unreliable, and should be avoided in most cases.",-1)),l("p",null,[e[1]||(e[1]=o("If you ")),e[2]||(e[2]=l("strong",null,"are not",-1)),e[3]||(e[3]=o(" using an A8(X) iPad on 15.7.2 to 15.8.3, you should check the ")),i(t,{to:"/installing-trollstore"},{default:r(()=>e[0]||(e[0]=[o("Installing TrollStore")])),_:1}),e[4]||(e[4]=o(" chart for a better option."))]),e[16]||(e[16]=l("p",null,[o("If you "),l("strong",null,"are"),o(" using an A8(X) iPad on 15.7.2 to 15.8.3, you can either:")],-1)),l("ul",null,[l("li",null,[e[6]||(e[6]=o("Follow ")),i(t,{to:"/installing-trollstore-trollrestore"},{default:r(()=>e[5]||(e[5]=[o("Installing TrollStore (TrollRestore)")])),_:1}),e[7]||(e[7]=o(" (A computer is outright ")),e[8]||(e[8]=l("em",null,"required",-1)),e[9]||(e[9]=o(", Find My must also be disabled)"))]),l("li",null,[e[11]||(e[11]=o("Follow ")),i(t,{to:"/installing-dopamine-sideloadly"},{default:r(()=>e[10]||(e[10]=[o("Installing Dopamine (Sideloadly)")])),_:1}),e[12]||(e[12]=o(" (Recommended if your goal is to jailbreak to begin with)"))]),e[13]||(e[13]=l("li",null,[o("Continue to follow this guide (Only recommended if you don't want to disable Find My "),l("em",null,"and"),o(" do not want to jailbreak)")],-1))])]),e[26]||(e[26]=l("h2",{id:"requirements",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#requirements","aria-hidden":"true"},"#"),o(" Requirements")],-1)),l("ul",null,[e[24]||(e[24]=l("li",null,"A device running iOS/iPadOS 14.0 to 15.8.3",-1)),e[25]||(e[25]=l("li",null,"The Tips app installed to your device",-1)),l("li",null,[e[18]||(e[18]=o("The latest version of ")),l("a",c,[e[17]||(e[17]=o("Sideloadly")),i(n)])]),l("li",null,[e[20]||(e[20]=o("The latest version of ")),l("a",m,[e[19]||(e[19]=o("iTunes")),i(n)]),e[21]||(e[21]=o(" if on Windows."))]),l("li",null,[e[23]||(e[23]=o("The latest version of ")),l("a",f,[e[22]||(e[22]=o("TrollMisaka")),i(n)])])]),e[27]||(e[27]=u('<h2 id="installing-the-application" tabindex="-1"><a class="header-anchor" href="#installing-the-application" aria-hidden="true">#</a> Installing the application</h2><ol><li>Open Sideloadly</li><li>Plug your iOS device into your computer <ul><li>Make sure your computer is trusted and allowed to view the contents of your device</li></ul></li><li>Drag and drop the TrollMisaka <code>.ipa</code> file into Sideloadly</li><li>Enter in your Apple ID</li><li>Enter in your password</li></ol><p>The app will now install to your iOS device.</p><h2 id="trusting-the-application" tabindex="-1"><a class="header-anchor" href="#trusting-the-application" aria-hidden="true">#</a> Trusting the application</h2><ol><li>Go to <code>Settings</code> -&gt; <code>General</code> -&gt; <code>Device Management</code> -&gt; <code>&lt;Your Apple ID&gt;</code><ul><li>Depending on your usage, <code>Device Management</code> may be labeled <code>Profiles and Device Management</code></li></ul></li><li>Tap <code>Trust &quot;&lt;Your Apple ID&gt;&quot;</code></li></ol><p>The TrollMisaka application can now be opened from home screen.</p><h2 id="adding-a-keyboard" tabindex="-1"><a class="header-anchor" href="#adding-a-keyboard" aria-hidden="true">#</a> Adding a Keyboard</h2><ol><li>Open TrollMisaka, then exit the app <em>while keeping it in the app switcher</em></li><li>Go to <code>Settings</code> -&gt; <code>General</code> -&gt; <code>Keyboard</code> -&gt; <code>Keyboards</code> -&gt; <code>Add New Keyboard...</code></li><li>Select <code>TrollMisaka</code></li><li>Tap <code>TrollMisaka</code>, then toggle on <code>Allow Full Access</code>, then tap <code>Allow</code></li><li>Re-open TrollMisaka</li></ol><p>After re-opening TrollMisaka, open the app switcher and then reboot your device.</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Do not fully close TrollMisaka until TrollStore is installed, or you will have to redo the entire guide from the beginning.</p></div><h2 id="injecting-trollstore-helper" tabindex="-1"><a class="header-anchor" href="#injecting-trollstore-helper" aria-hidden="true">#</a> Injecting TrollStore Helper</h2><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>This method may take several tries in order to work successfully.</p></div><ol><li>Unlock your device</li><li>Immediately open <code>Spotlight Search</code> (via swipping down on the middle of the home screen)</li><li>Tap the globe icon on the keyboard <ul><li>If needed, select <code>TrollMisaka</code> from the list of keyboards</li></ul></li><li>Tap <code>kopen</code><ul><li>If the device reboots, try these steps again</li></ul></li><li>Tap <code>Install TrollStore</code><ul><li>If the keyboard app seemingly refreshes, try again, If it fails, try again in Safari instead.</li></ul></li></ol><p>Once it says it&#39;s successful, you can continue with the next section.</p><h2 id="installing-trollstore" tabindex="-1"><a class="header-anchor" href="#installing-trollstore" aria-hidden="true">#</a> Installing TrollStore</h2><ol><li>Re-open the app switcher</li><li>Open the TrollMisaka app <em>from the app switcher</em></li><li>Tap <code>Install TrollStore</code></li></ol><p>Your device should respring, and TrollStore should now be installed.</p><h2 id="installing-persistence-helper" tabindex="-1"><a class="header-anchor" href="#installing-persistence-helper" aria-hidden="true">#</a> Installing Persistence Helper</h2><ol><li>Open the <code>TrollStore</code> app on your home screen</li><li>Press <code>Settings</code>, then press <code>Install Persistence Helper</code></li><li>Select <code>Tips</code> from the list of apps</li></ol>',19))])}var k=s(g,[["render",y],["__file","index.html.vue"]]);export{k as default};
