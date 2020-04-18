parcel build index.html;
Set-Location -Path ./dist;
az webapp up --location westus --name front-end-starter-with-parcel;
Set-Location -Path ../;