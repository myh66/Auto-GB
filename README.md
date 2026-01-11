# Auto-GB 🤖

> **An Intelligent National Subsidy Upload System**
>
> Organizing Ideas from the Past Few Days for Reproduction_For_Trea Friends Hackathon@ChangSha@我是X1aoma

Auto-GB is a smart application designed to streamline the process of uploading and managing national subsidy applications. Leveraging AI technology, it helps users quickly identify receipts and energy efficiency labels, calculate subsidies, and manage their submission records.

## ✨ Features

- **📸 Smart Scan & Recognition**: Take photos of receipts and energy efficiency labels. The system uses AI (Gemini) to automatically recognize and match product information.
- **📝 Manual Input**: Option to manually enter detailed product and subsidy information for precise control.
- **file_folder_open File Import**: Support importing documents from PDF or images.
- **🗳️ Drafts & History**: Manage pending submissions in Drafts and track the status of all past uploads in History.
- **🧮 Subsidy Calculator**: Built-in tools to help estimate subsidy amounts based on policy.
- **📜 Policy Information**: Easy access to relevant national subsidy policies.
- **📱 Mobile Ready**: Built with Capacitor for seamless Android deployment.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) (v18)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Mobile Runtime**: [Capacitor](https://capacitorjs.com/)
- **AI Integration**: Google Gemini API

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or yarn
- Android Studio (for Android development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/myh66/Auto-GB.git
   cd Auto-GB
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env.local` file in the root directory and add your Gemini API key:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```
   *(Note: Check the code to confirm the exact environment variable name used for the API key. Based on typical Vite projects, it should start with `VITE_`)*

4. **Run the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.

## 📱 Mobile Development (Android)

To build and run the application on an Android device or emulator:

1. **Sync Capacitor config**
   ```bash
   npm run cap:sync
   ```

2. **Add Android platform (if not added)**
   ```bash
   npm run cap:android
   ```

3. **Open in Android Studio**
   ```bash
   npm run cap:open
   ```

## 📂 Project Structure

```
├── components/     # Reusable UI components
├── pages/          # Application pages (Home, Calculator, History, etc.)
├── public/         # Static assets
├── .env.local      # Local environment variables
├── capacitor.config.ts # Capacitor configuration
├── package.json    # Project dependencies and scripts
└── vite.config.ts  # Vite configuration
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

[Apache-2.0 license](LICENSE)
