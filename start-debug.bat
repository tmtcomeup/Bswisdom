@echo off
echo Starting BSwisdom Debug Process...
echo.

echo Step 1: Checking Node.js installation...
node --version
if %ERRORLEVEL% NEQ 0 (
  echo ERROR: Node.js is not installed or not in PATH
  pause
  exit /b 1
)
echo Node.js check passed!
echo.

echo Step 2: Installing dependencies...
call npm install
if %ERRORLEVEL% NEQ 0 (
  echo ERROR: Failed to install dependencies
  pause
  exit /b 1
)
echo Dependencies installed successfully!
echo.

echo Step 3: Starting development server...
echo Opening browser to http://localhost:5173
start http://localhost:5173
echo.
echo Also opening debug page...
start debug.html
echo.

echo Starting Vite dev server with debugging enabled...
call npm run dev