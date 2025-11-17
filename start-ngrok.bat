@echo off
echo ========================================
echo Starting ngrok tunnel for Ollama
echo ========================================
echo.
echo Make sure Ollama is running first!
echo.
pause

REM Start ngrok tunnel to localhost:11434
ngrok http 11434

pause

