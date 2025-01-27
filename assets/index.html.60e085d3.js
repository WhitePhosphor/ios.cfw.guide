import{_ as d,r as a,o as u,c as p,a as t,b as o,d as l,w as i,e as s}from"./app.4eb44126.js";const f={},m={class:"custom-container warning"},g={href:"https://unc0ver.dev",target:"_blank",rel:"noopener noreferrer"},v={href:"http://altstore.io/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.apple.com/itunes/download/win64",target:"_blank",rel:"noopener noreferrer"},w={href:"https://secure-appldnld.apple.com/windows/061-91601-20200323-974a39d0-41fc-4761-b571-318b7d9205ed/iCloudSetup.exe",target:"_blank",rel:"noopener noreferrer"},y={href:"https://unc0ver.dev",target:"_blank",rel:"noopener noreferrer"},k={class:"custom-container warning"},S={class:"custom-container tip"};function A(T,e){const n=a("router-link"),r=a("ExternalLinkIcon");return u(),p("div",null,[t("p",null,[e[1]||(e[1]=o("unc0ver is a ")),l(n,{to:"/types-of-jailbreak/#semi-untethered-jailbreaks"},{default:i(()=>e[0]||(e[0]=[o("semi-untethered jailbreak")])),_:1}),e[2]||(e[2]=o(", meaning it requires an app to re-apply the exploit after a reboot."))]),e[46]||(e[46]=t("p",null,"The Fugu14 method of unc0ver supports A12 or newer devices on iOS 14.3 to 14.5.1",-1)),t("div",m,[e[6]||(e[6]=t("p",{class:"custom-container-title"},"WARNING",-1)),t("p",null,[e[4]||(e[4]=o("The Fugu14 method of unc0ver does not support beta versions of iOS. If you're on a beta version of iOS 14.3, 14.4, or 14.5, follow ")),l(n,{to:"/installing-taurine"},{default:i(()=>e[3]||(e[3]=[o("Installing Taurine")])),_:1}),e[5]||(e[5]=o(" instead."))])]),e[47]||(e[47]=t("p",null,"We will use the AltStore tool to allow us to set everything up to be able to jailbreak.",-1)),e[48]||(e[48]=t("h2",{id:"downloads",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#downloads","aria-hidden":"true"},"#"),o(" Downloads")],-1)),t("ul",null,[t("li",null,[e[8]||(e[8]=o("The latest version of ")),t("a",g,[e[7]||(e[7]=o("unc0ver")),l(r)])]),t("li",null,[e[10]||(e[10]=o("The latest version of ")),t("a",v,[e[9]||(e[9]=o("AltStore")),l(r)])]),t("li",null,[e[12]||(e[12]=o("The latest version of ")),t("a",b,[e[11]||(e[11]=o("iTunes")),l(r)]),e[13]||(e[13]=o(" if on Windows."))]),t("li",null,[e[15]||(e[15]=o("The latest version of ")),t("a",w,[e[14]||(e[14]=o("iCloud")),l(r)]),e[16]||(e[16]=o(" if on Windows"))])]),e[49]||(e[49]=t("h2",{id:"installing-the-application",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#installing-the-application","aria-hidden":"true"},"#"),o(" Installing the Application")],-1)),t("ol",null,[e[32]||(e[32]=s("<li>Download AltStore for your respective operating system</li><li>Launch AltStore/AltServer <ul><li>On macOS, open the Mail app and open <code>Mail</code> -&gt; <code>Preferences</code> in the menu bar</li><li>Click on the <code>General</code> tab, the <code>Manage Plug-ins</code>, check <code>AltPlugin</code> and apply</li></ul></li><li>Connect your iOS Device to your Mac or PC via USB</li><li>Click AltStore/AltServer in the Menu Bar/System Tray</li><li>Click Install AltStore <ul><li>Follow all onscreen prompts</li></ul></li><li>Open Settings and navigate to <code>General</code> -&gt; <code>Device Management</code> and verify AltStore</li>",6)),t("li",null,[e[18]||(e[18]=o("Download ")),t("a",y,[e[17]||(e[17]=o("unc0ver")),l(r)]),e[19]||(e[19]=o(" on your iOS Device and open the ")),e[20]||(e[20]=t("code",null,".ipa",-1)),e[21]||(e[21]=o(" in AltStore ")),e[22]||(e[22]=t("ul",null,[t("li",null,"Make sure your iOS Device and Mac or PC are connected to the same WiFi network")],-1))]),t("li",null,[e[28]||(e[28]=o("Once the ")),e[29]||(e[29]=t("code",null,".ipa",-1)),e[30]||(e[30]=o(" installs, you should see a prompt that the jailbreak requires untethering, tap ")),e[31]||(e[31]=t("code",null,"Install Untethered Jailbreak",-1)),t("ul",null,[t("li",null,[e[24]||(e[24]=o("If you don't see this prompt after installing the ")),e[25]||(e[25]=t("code",null,".ipa",-1)),e[26]||(e[26]=o(", your device/version combination is incompatible, and you should return to ")),l(n,{to:"/get-started"},{default:i(()=>e[23]||(e[23]=[o("Get Started")])),_:1}),e[27]||(e[27]=o("."))])])]),e[33]||(e[33]=s("<li>AltStore will install a placeholder application, once this completes, tap <code>Open Placeholder</code></li><li>Tap <code>Setup Fugu14</code>, then once the process completes, tap <code>OK</code></li><li>Re-open AltStore</li><li>AltStore will then patch said placeholder application, once this completes, tap <code>Open Placeholder</code> once again</li><li>Tap <code>Install Untether</code></li><li>Once the untether is finished installing, tap <code>Reboot Now</code> and allow the device to reboot</li><li>Re-open AltStore</li><li>Tap <code>Install unc0ver</code> and allow unc0ver to be installed.</li><li>Tap <code>Open unc0ver</code></li>",9))]),e[50]||(e[50]=s('<h2 id="running-unc0ver" tabindex="-1"><a class="header-anchor" href="#running-unc0ver" aria-hidden="true">#</a> Running unc0ver</h2><ol><li>Open the settings menu and disable the <code>Disable Auto Updates</code> toggle <ul><li>unc0ver disables Over-The-Air updates by default, however it&#39;s recommended to toggle this as it can cause issues when updating manually if not disabled</li></ul></li><li>Tap &quot;Done&quot;</li><li>Tap &quot;Jailbreak&quot;</li><li>Reboot your phone when prompted</li><li>Open the unc0ver application from your home screen immediately after rebooting</li><li>Tap &quot;Jailbreak&quot;</li></ol><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If the app or your device crashes/restarts unexpectedly and the jailbreak isn&#39;t installed, simply try rebooting and running the exploit again until it does work.</p></div>',3)),t("div",k,[e[39]||(e[39]=t("p",{class:"custom-container-title"},"WARNING",-1)),t("p",null,[e[35]||(e[35]=o("If you receive the error ")),e[36]||(e[36]=t("code",null,"rootFS already mounted, delete the OTA update",-1)),e[37]||(e[37]=o(", read the ")),l(n,{to:"/troubleshooting/#rootfs-already-mounted"},{default:i(()=>e[34]||(e[34]=[o("Troubleshooting")])),_:1}),e[38]||(e[38]=o(" page"))])]),t("p",null,[e[41]||(e[41]=o("You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install ")),l(n,{to:"/faq/#what-are-tweaks"},{default:i(()=>e[40]||(e[40]=[o("tweaks")])),_:1}),e[42]||(e[42]=o(", themes and more."))]),t("div",S,[e[45]||(e[45]=t("p",{class:"custom-container-title"},"TIP",-1)),t("p",null,[e[44]||(e[44]=o("If you wish to use a more modern package manager, continue to ")),l(n,{to:"/installing-sileo"},{default:i(()=>e[43]||(e[43]=[o("Installing Sileo")])),_:1})])])])}var I=d(f,[["render",A],["__file","index.html.vue"]]);export{I as default};
