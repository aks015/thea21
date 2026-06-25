@echo off
REM Production preview launcher (fast, optimized build).
cd /d "%~dp0"
echo Building optimized production bundle ...
node ".\node_modules\next\dist\bin\next" build
echo Starting production server on http://localhost:3000 ...
node ".\node_modules\next\dist\bin\next" start
pause
