AI agent for printery


PRINTER WORK

Step 1

Installera printer
usb cable to PC och ange standard i settings
wifi to PC och ange standard i settings


Step 2

DOWNLOAD
Tailscale
VS CODE

- file
print-server.js
code is there

- in terminal
cd C:\print-server
npm init -y
npm install express body-parser
node print-server.js


Step 3

AUTO WORK

- file
start-pm2.bat
code is there

- in terminal
npm install -g pm2


Step 4

in resturang
win + r
paste shell:startup
paste the start-pm2.bat

in terminal vscode
pm2 save / Done

----------
tailscale
http://RESTAURANT-IP:3001/print

n8n execution done!


COMMANDS! (use)

Check status
pm2 list

Restart server
pm2 restart print-server

Start server
pm2 start print-server.js --name print-server

Stop server
pm2 stop print-server

Logs (VERY useful)
pm2 logs print-server
