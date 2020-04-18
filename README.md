# Front End Starter Project with Parcel

There isn't much to this project. `parcel index.html` or `npm run start` will serve up you app at [localhost:1234](localhost:1234). If you want to deploy it to azure follow the (for deployment) setup steps and run `npm run deploy`.

## Setup
 
|Install  |
|---------|
|[Node](https://nodejs.org)|
|[Parcel Bundler](https://github.com/parcel-bundler/parcel)|
|(for deployment) [Azure Cloud Shell](https://azure.microsoft.com/en-us/features/cloud-shell/)|
|(for deployment) [Azure webapp Cloud Shell extension](https://docs.microsoft.com/en-us/azure/app-service/app-service-web-get-started-html#clean-up-resources)|
|Run `npm install`|
|(for deployement) Run `az login`|

## Commands

|npm  |referant  |
|---------|---------|
|`npm run start`|`parcel index.html`|
|`npm run build`|`parcel build index.html`|
|`npm run deploy`|[parcel build + Cloud Shell webapp deployment script in `./deploy.ps1`]|


## Deploy

The following command can be run from the `./dist` folder to deploy your app to a static hosting site on Azure: `$ az webapp up --location [azure-region] --name [your-project-name] #deploy to cloud shell`.

Thus, the command for this project will be: `$ az webapp up --location westus --name front-end-starter-with-parcel #deploy to cloud shell` -> [quick deploy to azure app service](https://front-end-starter-with-parcel.azurewebsites.net/) at https://front-end-starter-with-parcel.azurewebsites.net/