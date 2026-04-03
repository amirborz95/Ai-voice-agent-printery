Ai agent for printery


PRINTER WORK

Step 1

Installera printer
- USB Cable to pc och ange standard i settings
- WIFI to pc och ange standard i settings

Step 2

DOWNLOAD
Tailscale 
VS CODE

- 2 file
- print-server.js 
- start-pm2.bat 

- in terminal
cd C:\print-server
npm init -y
npm install express body-parser
node print-server.js

-in terminal
npm install -g pm2

step 3
win + r
paste shell:startup
paste the start-pm2.bat


Step 4
pm2 save in terminal
----------

Activate!
=
tailscale ipconfig
http://RESTAURANT-IP:3001/print 
in n8n http node - n8n executione done!

COMMANDS! (use)

Check status
-pm2 list

Restart server
-pm2 restart print-server

Start server
pm2 start print-server.js --name print-server

Stop server
-pm2 stop print-server

Logs (VERY useful)
-pm2 logs print-server


