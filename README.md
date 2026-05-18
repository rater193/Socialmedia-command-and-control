# SocialMedia Command and Control

Node.js web server for the SocialMedia C3 Control Panel.

## Current Status

This project currently serves the SocialMedia C3 optimized flow toggle-sidebar control panel from an Express web server.

The frontend is kept portable under `/html` and split into:

```text
html/index.html
html/js/source.js
html/js/themeManager.js
html/css/themes/default/style.css
```

The backend includes a basic structure for future platform integrations under `/platform`.

## Install

```bash
npm install
```

## Configure

Copy the example environment file:

```bash
cp .env.example .env
```

Default values:

```text
PORT=3000
NODE_ENV=development
APP_NAME=SocialMedia C3 Control Panel
APP_VERSION=0.1.0
```

Do not commit real API keys, OAuth secrets, or production credentials into `.env`.

## Start

```bash
npm start
```

Then open:

```text
http://localhost:3000
```

## API Test

```text
GET /api/status
```

Expected response:

```json
{
  "ok": true,
  "service": "SocialMedia C3 Control Panel",
  "version": "0.1.0"
}
```

## Project Structure

```text
./
├─ package.json
├─ server.js
├─ .env.example
├─ .gitignore
│
├─ platform/
│  ├─ platforms/
│  │  ├─ youtube.json
│  │  └─ twitterx.json
│  │
│  └─ lib/
│     ├─ config.js
│     ├─ restendpoints.js
│     │
│     └─ platformapi/
│        ├─ platform.js
│        ├─ platform_youtube.js
│        └─ platform_twitterx.js
│
└─ html/
   ├─ index.html
   │
   ├─ js/
   │  ├─ source.js
   │  └─ themeManager.js
   │
   └─ css/
      └─ themes/
         └─ default/
            └─ style.css
```

## Notes

- Plain JavaScript only.
- No TypeScript.
- No database yet.
- No real YouTube or Twitter/X OAuth yet.
- Platform API classes are placeholders for future integrations.
