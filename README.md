# Spa React (Webpack)

A full featured starter for modern front-end single page applications. Uses React and ***Webpack 4*** to create optimized builds, ***linters*** to check for code style and errors, and finally easily deployed using ***Firebase***.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development, testing and deployment.

### Prerequisites

Node and NPM versions used for this project

```
node >= 10.0.0
npm >= 5.6.0
```

### Installing

After cloning the repository, run following from root directory of cloned project

```
npm install
```

### Additional setup

In order to deploy the app, a ```.env``` file should be created in the root directory of the project. The deploy script ```npm run deploy``` will read this file to determine what Firebase project to update.

```
FIREBASE_PROJECT=<YOUR-FIREBASE-PROJECT-HERE>
```

To get the project name, visit https://console.firebase.google.com and create a new project. The project name created here will be used in the ```.env``` file mentioned above.

### NPM Commands


```npm run start```
- spawns a hot reloadable dev server and browser instance of the app.

```npm run test```
- runs dev tests once then exits

```npm run build```
- creates production build to build/

```npm run deploy```
- creates production build to build/, and prompts to deploy to Firebase

## License

Copyright 2019 Kalim Fleet

Licensed under the Apache License, Version 2.0 (the "License"); you may use this file  in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
