import{_ as s,r,o as d,c as u,a as t,b as o,d as i,w as p,e as l}from"./app.4eb44126.js";const h={},c={href:"https://mega.nz/folder/k4FAXCIB#Fk7pxs6ikYzL3YBvAGX5ig/folder/cgUwDb5S",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.iclarified.com/970/appletv-firmware-download-locations",target:"_blank",rel:"noopener noreferrer"},w={href:"https://mega.nz/folder/k4FAXCIB#Fk7pxs6ikYzL3YBvAGX5ig/folder/M1kWwbia",target:"_blank",rel:"noopener noreferrer"};function m(k,e){const a=r("router-link"),n=r("ExternalLinkIcon");return d(),u("div",null,[e[11]||(e[11]=t("p",null,"Patchstick is capable of untether jailbreaking the Apple TV 1 on Apple TV Software 1.0 to 3.0.2.",-1)),t("p",null,[e[1]||(e[1]=o("Patchstick is an ")),i(a,{to:"/types-of-jailbreak/#untethered-jailbreaks"},{default:p(()=>e[0]||(e[0]=[o("untethered")])),_:1}),e[2]||(e[2]=o(" jailbreak meaning that it survives a reboot and can cause a permanent bootloop if something goes wrong. If you encounter a bootloop, restore your device via iTunes or Finder (macOS Catalina and newer)."))]),e[12]||(e[12]=t("h2",{id:"requisiti",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#requisiti","aria-hidden":"true"},"#"),o(" Requisiti")],-1)),e[13]||(e[13]=t("ul",null,[t("li",null,"A computer with at least one free USB-A port"),t("li",null,"A USB-A flash drive with a capacity between 1GB and 64GB"),t("li",null,"macOS 10.8 to 10.13")],-1)),e[14]||(e[14]=t("h2",{id:"creating-the-patchstick",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#creating-the-patchstick","aria-hidden":"true"},"#"),o(" Creating the Patchstick")],-1)),t("ol",null,[t("li",null,[e[5]||(e[5]=o("Download the Apple TV software's restore DMG corresponding to the TV Software version that your Apple TV is running from ")),t("a",c,[e[3]||(e[3]=o("here")),i(n)]),e[6]||(e[6]=o(". ")),t("a",f,[e[4]||(e[4]=o("This link")),i(n)]),e[7]||(e[7]=o(" will tell you which DMG corresponds to what TV Software version"))]),t("li",null,[e[9]||(e[9]=o("Download the latest version of ")),t("a",w,[e[8]||(e[8]=o("ATV USB Creator")),i(n)])]),e[10]||(e[10]=l("<li>Unzip ATV USB Creator and drag it to /Applications</li><li>Open Terminal and run the command <code>sudo /Applications/atvusb-creator.app/Contents/MacOS/atvusb-creator</code> to open the application. Enter your user password when prompted.</li><li>In ATV USB Creator, click Choose a DMG and then select your downloaded TV Software DMG.</li><li>Ensure that your chosen USB flash drive is selected in the &quot;USB Target Device&quot; dropdown. It will not show the drive&#39;s name, only its location in /dev. <ul><li>To ensure that it is the correct drive, open Disk Utility, select your flash drive, and make sure that the Device listing matches up with ATV USB Creator&#39;s selected device.</li><li>This will erase all data on the flash drive.</li></ul></li><li>Make sure that <code>ssh tools</code> and <code>bin tools</code> is enabled under the Installation Options dropdown. You may enable the other options, but they are not required.</li><li>Click the <code>Create Using -&gt;</code> button and wait. The process will take a few minutes.</li>",6))]),e[15]||(e[15]=l('<h2 id="installing-the-patchstick" tabindex="-1"><a class="header-anchor" href="#installing-the-patchstick" aria-hidden="true">#</a> Installing the Patchstick</h2><ol><li>Unplug the power cable from your Apple TV.</li><li>Plug your newly created Patchstick into the USB port on the back of your Apple TV.</li><li>Plug the power cable back in.</li><li>Wait a few minutes. You will see an Apple TV 1 logo with Tux sitting on it for about 30 seconds, and then a lot of text will scroll down the screen.</li><li>Once you see the line <code>penbuntu login: _</code> at the bottom, unplug the Apple TV, unplug the USB flash drive, and plug your Apple TV back in.</li></ol><p>:::</p><p>You should now be jailbroken with the Software Menu added to your home screen. You can use this menu to manage your Apple TV. SSH is available via the command <code>ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-dss frontrow@ip.of.apple.tv</code>, the password is <code>frontrow</code>. To mount / as read-write, run the command <code>sudo mount -t hfs -o rw /dev/disk0s3 /</code>.</p>',4))])}var b=s(h,[["render",m],["__file","index.html.vue"]]);export{b as default};
