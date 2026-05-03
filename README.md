AI Agent for Printer (Cloudflare Tunnel Setup)

------------------------------------------------
STEP 1 — DOWNLOAD

Download:
- VS Code
- Node.js
- Cloudflared

------------------------------------------------
STEP 2 — PRINT SERVER SETUP

Create folder:

C:\print-server

Install PM2:

npm install -g pm2

-----------------------------------------------

Create file:

print-server.js  
(code is there)

-----------------------------------------------

In terminal:

cd C:\print-server

npm init -y
npm install express

Start server:

pm2 start print-server.js --name print-server
pm2 save

-----------------------------------------------

COMMANDS:

Start:
pm2 start print-server.js --name print-server

Stop:
pm2 stop print-server

Check status:
pm2 list

------------------------------------------------
STEP 3 — CLOUDFLARE TUNNEL

Install:

winget install --id Cloudflare.cloudflared

Login:

cloudflared tunnel login

Get token:

cloudflared tunnel token printer

Run tunnel:

cloudflared tunnel run --token YOUR_TOKEN

------------------------------------------------
STEP 4 — AUTO START (IMPORTANT)

Create file:

C:\print-server\start-pm2.bat

Paste:

@echo off
cd C:\print-server
pm2 resurrect

-----------------------------------------------

Create file:

C:\print-server\start-tunnel.bat

Paste:

@echo off
cloudflared tunnel run --token YOUR_TOKEN

-----------------------------------------------

Add to startup:

Win + R  
Paste:

shell:startup

Copy into folder:
- start-pm2.bat
- start-tunnel.bat

-----------------------------------------------

Save PM2:

pm2 save

------------------------------------------------
STEP 5 — WINDOWS SETTINGS

Settings → Power → Sleep = NEVER

------------------------------------------------
FINAL LINK

https://print.mysushialwaysworksman.store
