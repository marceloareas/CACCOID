@echo off
copy /Y githook\commit-msg .git\hooks\commit-msg > nul

if exist .git\hooks\commit-msg (
  echo Hook do commit pattern instalado com sucesso!
) else (
  echo Falha ao instalar o hook do commit pattern. Verifique se o diretorio .git existe e se o arquivo de origem esta correto.
)