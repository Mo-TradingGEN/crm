# Quick Setup: Connect Vercel to Local Ollama

## Quick Steps

1. **Install ngrok** (if not already installed)
   - Download: https://ngrok.com/download
   - Sign up: https://dashboard.ngrok.com/signup
   - Get authtoken: https://dashboard.ngrok.com/get-started/your-authtoken

2. **Configure ngrok**
   ```bash
   ngrok config add-authtoken YOUR_AUTH_TOKEN
   ```

3. **Start Ollama** (if not running)
   ```bash
   start-ollama-gpu.bat
   ```

4. **Start ngrok tunnel**
   ```bash
   start-ngrok.bat
   ```
   Or manually:
   ```bash
   ngrok http 11434
   ```

5. **Copy the HTTPS URL** from ngrok output (e.g., `https://abc123.ngrok-free.app`)

6. **Add to Vercel Environment Variables**
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add: `VITE_OLLAMA_ENDPOINT` = `https://your-ngrok-url.ngrok-free.app`
   - Apply to: Production, Preview, Development
   - Save

7. **Redeploy** your app on Vercel

## Important Notes

- ⚠️ Keep ngrok running while using the app
- ⚠️ Free ngrok URLs change on restart - update Vercel env var when they change
- ⚠️ For static URL, consider ngrok paid plan

See `setup-ngrok.md` for detailed instructions.

