Setup microfrontend with nx and angular cli:

- npm install -g nx@latest
- npm install -g @angular/cli@latest
- npx create-nx-workspace@latest banker --preset=apps
- cd banker
- npx nx add @nx/angular
- nx g @nx/angular:host apps/dashboard --prefix=bnk --style=scss --dynamic=true --bundler=rspack
- nx g @nx/angular:remote apps/system_register --prefix=bnk --host=dashboard --style=scss --bundler=rspack
- nx serve dashboard --devRemotes=system_register

failed to serve app setuped like that with error:

```
nx serve dashboard --devRemotes=system_register

> nx run dashboard:serve --devRemotes=system_register

> rspack serve --port=4200 --node-env=development --devRemotes=system_register

Unknown argument: devRemotes
Warning: command "rspack serve --port=4200 --node-env=development --devRemotes=system_register" exited with non-zero status code
——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

 NX   Successfully ran target serve for project dashboard
```
