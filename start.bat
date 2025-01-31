@echo off
echo Checking for Node.js installation...

:: Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Node.js is not installed or not in PATH!
    echo Please install Node.js from https://nodejs.org/
    echo Choose the LTS (Long Term Support) version
    echo After installation, close this window and run the script again
    echo.
    echo Press any key to open the Node.js download page...
    pause >nul
    start https://nodejs.org/
    exit /b 1
)

:: If we get here, Node.js is installed
echo Node.js is installed, proceeding with project setup...

:: Create React App with TypeScript template
call npx create-react-app qa-metrics-dashboard --template typescript
cd qa-metrics-dashboard

:: Install UI dependencies
call npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion

:: Install chart and data processing dependencies
call npm install react-chartjs-2 chart.js papaparse @types/papaparse

:: Install utility dependencies
call npm install axios react-icons

:: Start the development server
echo.
echo Installation complete! Starting the development server...
call npm start

pause