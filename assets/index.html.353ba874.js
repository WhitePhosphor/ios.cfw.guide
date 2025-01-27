import{_ as d}from"./checkra1n.ace0089d.js";import{_ as p,r as i,o as c,c as m,a as e,b as l,d as t,w as o,e as h}from"./app.4eb44126.js";const y={},f={class:"custom-container danger"},b={href:"https://checkra.in",target:"_blank",rel:"noopener noreferrer"},v={class:"custom-container tip"},g={href:"https://checkra.in/linux",target:"_blank",rel:"noopener noreferrer"};function w(k,n){const r=i("router-link"),s=i("ExternalLinkIcon"),u=i("Tab"),a=i("Tabs");return c(),m("div",null,[e("div",f,[n[3]||(n[3]=e("p",{class:"custom-container-title"},"DANGER",-1)),e("p",null,[n[1]||(n[1]=l("Se si sta cercando di utilizzare un software Virtual Machine di qualche tipo da Windows (es. Virtualbox, VMWare, Sottosistema Windows per Linux, ecc.) questa guida non funzioner\xE0 e dovresti usare invece ")),t(r,{to:"/using-odysseyn1x"},{default:o(()=>n[0]||(n[0]=[l("Utilizzare Odysseyn1x")])),_:1}),n[2]||(n[2]=l("."))])]),n[23]||(n[23]=h('<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If you are using a computer with an AMD Ryzen CPU, you will likely run into issues. If you do run into issues, you should use a Mac or a computer with an Intel CPU to follow this guide.</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If you have an Apple TV HD and are using a USB-C to USB-C to do this process, you may run into issues entering into DFU mode</p><p>If you do have issues, get a USB-A to USB-C cable and, if necessary, also get a USB-C to USB-A adapter.</p></div><h2 id="requirements-linux" tabindex="-1"><a class="header-anchor" href="#requirements-linux" aria-hidden="true">#</a> Requirements (Linux)</h2>',3)),e("ul",null,[e("li",null,[n[5]||(n[5]=l("L'ultima versione di ")),e("a",b,[n[4]||(n[4]=l("checkra1n")),t(s)])]),n[6]||(n[6]=e("li",null,"An Apple TV Siri remote (any generation)",-1)),n[7]||(n[7]=e("li",null,[l("If you have an Apple TV 4K, you will also need two cables: "),e("ul",null,[e("li",null,"A GoldenEye or Foxlink X892 cable"),e("li",null,"An Alex DCSD cable"),e("li",null,"It is recommended to purchase these from AliExpress for the best prices. Note that they typically take about a month to arrive.")])],-1))]),n[24]||(n[24]=e("p",null,[e("img",{src:d,alt:"Uno screenshot dell'applicazione checkra1n"})],-1)),n[25]||(n[25]=e("h2",{id:"installing-checkra1n",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-checkra1n","aria-hidden":"true"},"#"),l(" Installing checkra1n")],-1)),t(a,{tabs:""},{default:o(()=>[t(u,{tab:"",name:"Apple TV HD",default:!0},{default:o(()=>[e("div",v,[n[11]||(n[11]=e("p",{class:"custom-container-title"},"TIP",-1)),e("p",null,[n[9]||(n[9]=l("checkra1n provides native support to machines running a Debian-based distro (e.g Ubuntu). It's recommended that you follow ")),e("a",g,[n[8]||(n[8]=l("specific instructions")),t(s)]),n[10]||(n[10]=l(" provided by the checkra1n team themselves."))])]),e("ol",null,[n[18]||(n[18]=e("li",null,[l("Eseguire il file binary di "),e("code",null,"checkra1n"),l(" nel terminale usando "),e("code",null,"./checkra1n"),e("ul",null,[e("li",null,[l("Potrebbe essere necessario eseguire "),e("code",null,"sudo chmod a+x ./checkra1n"),l(" se il file binary non viene eseguito")]),e("li",null,[l("If you're on tvOS 14.6 or later, you will need to head into "),e("code",null,"Options"),l(", then enable the "),e("code",null,"Allow Untested Versions"),l(" option once it runs")])])],-1)),n[19]||(n[19]=e("li",null,"Plug your Apple TV device into your computer",-1)),n[20]||(n[20]=e("li",null,[l("Clicca su "),e("code",null,"Start"),l(" -> "),e("code",null,"Next"),l(" su checkra1n "),e("ul",null,[e("li",null,[l("If you're on tvOS 14.6 or later, you will need to head into "),e("code",null,"Options"),l(", then enable the "),e("code",null,"Allow Untested Versions"),l(" option before clicking Start")]),e("li",null,"Your device will be put into recovery mode automatically")])],-1)),e("li",null,[n[13]||(n[13]=l("Ora vedrai le istruzioni su come riavviare il tuo dispositivo in ")),t(r,{to:"/faq/#what-is-dfu-mode"},{default:o(()=>n[12]||(n[12]=[l("modalit\xE0 DFU")])),_:1}),n[14]||(n[14]=l(", clicca ")),n[15]||(n[15]=e("code",null,"Start",-1)),n[16]||(n[16]=l(" per iniziare ")),n[17]||(n[17]=e("ul",null,[e("li",null,"Follow the instructions until your device shows a black screen")],-1))]),n[21]||(n[21]=e("li",null,"After this, checkra1n should automatically install to your Apple TV",-1))])]),_:1}),t(u,{tab:"",name:"Apple TV 4K (1st generation)",default:!1},{default:o(()=>n[22]||(n[22]=[e("ol",null,[e("li",null,"Connect the GoldenEye to your Apple TV's Ethernet port"),e("li",null,'The Alex cable will have text that says "Bacon Side Up" on it; orient this to face towards the side of the Lightning port farthest from the edge of the GoldenEye, then connect the two'),e("li",null,[l("Connect the other end of the Alex cable to your computer, and then power cycle the Apple TV "),e("ul",null,[e("li",null,"You can do this by unplugging the power cord or by holding the Menu and TV buttons")])]),e("li",null,"The Apple TV should automatically enter DFU."),e("li",null,[l("Run the "),e("code",null,"checkra1n"),l(" binary in the terminal using "),e("code",null,"./checkra1n -c"),e("ul",null,[e("li",null,[l("Potrebbe essere necessario eseguire "),e("code",null,"sudo chmod a+x ./checkra1n"),l(" se il file binary non viene eseguito")]),e("li",null,[l("If you're on tvOS 14.6 or later, you will need to head into "),e("code",null,"Options"),l(", then enable the "),e("code",null,"Allow Untested Versions"),l(" option once it runs")])])]),e("li",null,"After this, checkra1n should automatically install.")],-1)])),_:1})]),_:1}),n[26]||(n[26]=e("p",null,"Your Apple TV device should now reboot.",-1)),n[27]||(n[27]=e("p",null,"You should now be jailbroken with the checkra1n loader app installed on your home screen, which allows you to install nito.tv. You can use nito.tv to install tweaks, themes and more.",-1))])}var V=p(y,[["render",w],["__file","index.html.vue"]]);export{V as default};
