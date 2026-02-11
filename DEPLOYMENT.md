# 🚀 Hostinger VPS Deployment Guide - 2MB Limit Checker

## Quick Setup (No MongoDB Required)

This guide will get your 2MB Limit Checker running on Hostinger VPS in ~15 minutes.

---

## Prerequisites

- Hostinger VPS with Ubuntu 20.04/22.04
- SSH access to your VPS
- A domain pointed to your VPS IP

---

## Step 1: Connect to Your VPS

```bash
ssh root@YOUR_VPS_IP
```

---

## Step 2: Install Required Software

```bash
# Update system
apt update && apt upgrade -y

# Install Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt install -y nodejs

# Install Python 3 and pip
apt install -y python3 python3-pip python3-venv

# Install Nginx
apt install -y nginx

# Install Git
apt install -y git
```

---

## Step 3: Clone Your Repository

```bash
# Create web directory
mkdir -p /var/www
cd /var/www

# Clone your repo
git clone https://github.com/YOUR_USERNAME/2mb-checker.git
cd 2mb-checker
```

---

## Step 4: Setup Backend (No MongoDB)

```bash
cd /var/www/2mb-checker/backend

# Create virtual environment
python3 -m venv venv
source venv/bin/activate

# Use the simplified requirements (no MongoDB)
# If you have requirements_simple.txt, use that
# Otherwise install manually:
pip install fastapi uvicorn python-dotenv pydantic requests beautifulsoup4

# Create empty .env file (not needed for simple version)
touch .env

# Test the backend
uvicorn server:app --host 127.0.0.1 --port 8001
# Press Ctrl+C to stop after testing
```

**Note:** If using the simplified server without MongoDB, rename or replace:
```bash
# If you have server_simple.py, use it instead:
cp server_simple.py server.py
```

---

## Step 5: Create Backend Service

```bash
nano /etc/systemd/system/2mb-checker.service
```

Paste this content:

```ini
[Unit]
Description=2MB Checker FastAPI Backend
After=network.target

[Service]
User=www-data
Group=www-data
WorkingDirectory=/var/www/2mb-checker/backend
Environment="PATH=/var/www/2mb-checker/backend/venv/bin"
ExecStart=/var/www/2mb-checker/backend/venv/bin/uvicorn server:app --host 127.0.0.1 --port 8001
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

Save and exit (Ctrl+X, Y, Enter), then:

```bash
# Set correct permissions
chown -R www-data:www-data /var/www/2mb-checker

# Enable and start the service
systemctl daemon-reload
systemctl enable 2mb-checker
systemctl start 2mb-checker

# Check status
systemctl status 2mb-checker
```

---

## Step 6: Setup Frontend

```bash
cd /var/www/2mb-checker/frontend

# Create .env with YOUR domain
echo "REACT_APP_BACKEND_URL=https://yourdomain.com" > .env

# Install dependencies
npm install

# Build for production
npm run build
```

---

## Step 7: Configure Nginx

```bash
nano /etc/nginx/sites-available/2mb-checker
```

Paste this (replace `yourdomain.com` with your actual domain):

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    # Frontend (React build)
    root /var/www/2mb-checker/frontend/build;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;

    # Handle React Router (SPA) - serves index.html for all routes
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Proxy API requests to FastAPI backend
    location /api {
        proxy_pass http://127.0.0.1:8001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 300s;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

Save and exit, then:

```bash
# Enable the site
ln -sf /etc/nginx/sites-available/2mb-checker /etc/nginx/sites-enabled/

# Remove default site
rm -f /etc/nginx/sites-enabled/default

# Test nginx config
nginx -t

# Reload nginx
systemctl reload nginx
```

---

## Step 8: Install SSL Certificate (HTTPS)

```bash
# Install Certbot
apt install -y certbot python3-certbot-nginx

# Get SSL certificate (replace with your domain)
certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Certificate auto-renews automatically
```

---

## Step 9: Test Everything

```bash
# Check backend is running
curl http://127.0.0.1:8001/api/
# Should return: {"message":"..."}

# Check backend analysis endpoint
curl -X POST http://127.0.0.1:8001/api/analyze \
  -H "Content-Type: application/json" \
  -d '{"url":"https://google.com"}'

# Check services status
systemctl status 2mb-checker
systemctl status nginx
```

Visit `https://yourdomain.com` in your browser - it should work!

---

## Troubleshooting

### Backend not starting?
```bash
# Check logs
journalctl -u 2mb-checker -f

# Check if port is in use
lsof -i :8001
```

### 502 Bad Gateway?
```bash
# Backend might not be running
systemctl restart 2mb-checker

# Check backend logs
journalctl -u 2mb-checker --since "5 minutes ago"
```

### 404 on API calls?
```bash
# Check nginx config
nginx -t

# Make sure location /api block exists
cat /etc/nginx/sites-enabled/2mb-checker | grep -A 10 "location /api"
```

### Permission errors?
```bash
# Fix ownership
chown -R www-data:www-data /var/www/2mb-checker
```

---

## Updating Your App

When you push changes to GitHub:

```bash
cd /var/www/2mb-checker
git pull

# If backend changed
systemctl restart 2mb-checker

# If frontend changed
cd frontend
npm install
npm run build
```

---

## Summary

| Component | Location | Port |
|-----------|----------|------|
| Frontend | `/var/www/2mb-checker/frontend/build` | 80/443 |
| Backend | `/var/www/2mb-checker/backend` | 8001 (internal) |
| Nginx | Reverse proxy | 80/443 |

Your app will be live at `https://yourdomain.com` 🎉

---

## File Structure

```
/var/www/2mb-checker/
├── backend/
│   ├── server.py          # FastAPI app
│   ├── requirements.txt   # Python deps
│   ├── venv/              # Virtual environment
│   └── .env               # (optional)
│
├── frontend/
│   ├── build/             # Production build
│   ├── src/               # Source code
│   ├── .env               # REACT_APP_BACKEND_URL
│   └── package.json
│
└── DEPLOYMENT.md          # This file
```
