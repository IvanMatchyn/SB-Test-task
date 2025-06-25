# 📱 SBTestTask – React Native App

This is a **React Native** project bootstrapped with the [React Native CLI](https://github.com/react-native-community/cli).
It features secure storage, biometric login, chat interface, Redux for state management, and various third-party libraries for enhanced development experience.

---

## 🚀 Getting Started

### 1. Prerequisites

* [Node.js](https://nodejs.org/en/) ≥ 18
* [Yarn](https://classic.yarnpkg.com/)
* Xcode (for iOS)
* Android Studio (for Android)

### 2. Setup Environment

Create a `.env` file in the root directory and set the following:

```env
OPENAI_API_KEY=your_openai_api_key
```

---

## 📦 Installation & Usage

### Install dependencies:

```bash
yarn install
```

### Start Metro bundler:

```bash
yarn start
```

### Run on iOS simulator:

```bash
yarn ios
```

### Run on Android emulator:

```bash
yarn android
```

---

## 🛠️ Scripts

| Command          | Description                              |
| ---------------- | ---------------------------------------- |
| `yarn start`     | Start Metro bundler                      |
| `yarn ios`       | Run app on iOS simulator (iPhone 16 Pro) |
| `yarn android`   | Run app on Android emulator              |
| `yarn lint`      | Run ESLint on all source files           |
| `yarn test`      | Run Jest tests                           |
| `yarn tsc-lint`  | Type-check code using TypeScript         |
| `yarn precommit` | Run lint-staged on staged files          |

---

## 🏗️ Architecture & Libraries

### 🔧 Core Libraries

* [`react-native`](https://reactnative.dev/)
* [`@react-navigation/native`](https://reactnavigation.org/)
* [`@reduxjs/toolkit`](https://redux-toolkit.js.org/)
* [`redux-persist`](https://github.com/rt2zz/redux-persist)
* [`axios`](https://axios-http.com/)

### ⚙️ State & Data

* **State Management**: `@reduxjs/toolkit`, `redux`, `redux-thunk`
* **Persistence**: `redux-persist`, `react-native-mmkv`

> Note: `redux-thunk` is used for simplicity and speed. For production, consider migrating to `RTK Query`.

### 🔒 Security

* `react-native-mmkv` – High-performance secure storage
* `react-native-biometrics` – Biometric authentication (Face ID / Touch ID)

### 💬 UI/UX & Utilities

* `react-native-gifted-chat` – Chat interface
* `react-native-toast-message` – Toast notifications
* `react-native-svg` – SVG rendering
* `react-native-linear-gradient` – Gradients
* `moment` – Date/time formatting
* `react-native-safe-area-context`, `react-native-screens` – Safe UI areas
* `react-native-keyboard-controller` – Keyboard behavior control

---

## 🛡️ Dev Tools

* `TypeScript` – Static typing
* `ESLint` – Linting
* `Prettier` – Code formatting
* `Jest` – Unit testing
* `husky` + `lint-staged` – Git pre-commit hooks
* `react-native-dotenv` – `.env` support

---

## 🧪 Git Hooks & Linting

Hooks are managed by **Husky** and triggered on `pre-commit`.

```json
"husky": {
  "hooks": {
    "pre-commit": "yarn precommit"
  }
}
```

```json
"lint-staged": {
  "*.{ts,tsx}": [
    "yarn prettier --write",
    "yarn lint --fix",
    "yarn tsc-lint"
  ]
}
```
