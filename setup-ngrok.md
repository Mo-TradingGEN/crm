# Setting Up ngrok to Connect Vercel to Your Local Ollama

This guide will help you expose your local Ollama service so your Vercel-deployed app can connect to it.

## Step 1: Install ngrok

1. Download ngrok from https://ngrok.com/download
2. Extract the executable to a folder (e.g., `C:\ngrok`)
3. Sign up for a free ngrok account at https://dashboard.ngrok.com/signup
4. Get your authtoken from https://dashboard.ngrok.com/get-started/your-authtoken

## Step 2: Configure ngrok

Open PowerShell or Command Prompt and run:

```bash
ngrok config add-authtoken YOUR_AUTH_TOKEN_HERE
```

## Step 3: Start Ollama

Make sure Ollama is running on your local machine:

```bash
ollama serve
```

Or use your batch file:
```bash
start-ollama-gpu.bat
```

## Step 4: Start ngrok Tunnel

In a new terminal window, run:

```bash
ngrok http 11434
```

This will create a public URL that tunnels to your localhost:11434.

You'll see output like:
```
Forwarding   https://abc123.ngrok-free.app -> http://localhost:11434
```

**Copy the HTTPS URL** (e.g., `https://abc123.ngrok-free.app`)

## Step 5: Configure Vercel Environment Variable

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add a new variable:
   - **Name**: `VITE_OLLAMA_ENDPOINT`
   - **Value**: Your ngrok URL (e.g., `https://abc123.ngrok-free.app`)
   - **Environment**: Production, Preview, and Development
4. Click **Save**

## Step 6: Redeploy Your App

After adding the environment variable, redeploy your app:

```bash
git push
```

Or manually trigger a redeploy from the Vercel dashboard.

## Important Notes

⚠️ **Keep ngrok Running**: The ngrok tunnel must be running whenever you want the Vercel app to connect to your local Ollama.

⚠️ **Free ngrok Limitations**: 
- Free tier gives you a random URL each time you restart ngrok
- URLs change on restart, so you'll need to update Vercel environment variable
- Consider ngrok paid plan for a static URL

⚠️ **Security**: Your local Ollama will be publicly accessible via the ngrok URL. Make sure your network is secure.

## Alternative: Use ngrok with Static Domain (Paid)

If you have a paid ngrok plan, you can use a static domain:

```bash
ngrok http 11434 --domain=your-static-domain.ngrok-free.app
```

This way, the URL won't change and you won't need to update Vercel each time.

## Troubleshooting

**Connection fails from Vercel:**
- Make sure ngrok is running
- Check that Ollama is running on port 11434
- Verify the environment variable in Vercel matches your ngrok URL
- Check ngrok dashboard for connection status

**ngrok URL changes:**
- Free tier URLs change on restart
- Update Vercel environment variable with new URL
- Redeploy your app

