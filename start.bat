@echo off
set "PATH=%~dp0.node;%PATH%"
echo Starting Friends in Pondy Production Server at http://localhost:3000 ...
node .\node_modules\next\dist\bin\next start -p 3000
pause
