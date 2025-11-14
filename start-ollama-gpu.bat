@echo off
REM Force Ollama to use full GPU (RTX 2080)
set OLLAMA_NUM_GPU=99
set OLLAMA_MAX_LOADED_MODELS=2
set OLLAMA_KEEP_ALIVE=24h
set CUDA_VISIBLE_DEVICES=0

echo Starting Ollama with full GPU acceleration...
echo Models will stay loaded for 24 hours for instant responses...
start /B ollama serve

timeout /t 5 /nobreak > nul

echo Pre-loading llama3.2:3b into GPU memory (FASTEST for RTX 2080)...
ollama run llama3.2:3b "ready"

echo.
echo ✅ Ollama is ready! Model loaded in GPU memory.
echo ✅ Next requests will be INSTANT (no 30s load time)
pause

