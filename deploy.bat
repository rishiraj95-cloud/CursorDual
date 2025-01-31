@echo off
echo QA Metrics Dashboard Deployment Script
echo ------------------------------------

:: Check if node_modules exists
if not exist "node_modules\" (
    echo Installing dependencies...
    call npm install
)

:MENU
echo.
echo 1. Start Development Server
echo 2. Build for Production
echo 3. Start Production Server
echo 4. Exit
echo.

set /p choice="Enter your choice (1-4): "

if "%choice%"=="1" goto DEV
if "%choice%"=="2" goto BUILD
if "%choice%"=="3" goto PROD
if "%choice%"=="4" goto END

:DEV
echo Starting development server...
call npm start
goto END

:BUILD
echo Building for production...
call npm run build
echo Build complete! Files are in the 'build' folder
goto MENU

:PROD
echo Starting production server...
:: Check if serve is installed
where serve >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Installing serve package...
    call npm install -g serve
)
call serve -s build
goto END

:END
echo.
echo Thank you for using QA Metrics Dashboard
pause 