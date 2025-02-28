# Image Handling with Next.js

This project demonstrates how to handle single and multiple image uploads in a Next.js application. It uses server actions to process and save uploaded images locally to the public directory on the server.

⚠️ **WARNING:** This project serves only as a guideline. It **will not work in production** because Next.js does not dynamically render the `public` folder.  

If you have suggestions to improve the code, feel free to contribute or share your ideas!


## Features
- Upload single or multiple images
- Save uploaded images locally with unique filenames
- Display file paths in the console

## Tech Stack
- **Next.js** 15.1.7
- **React** 19.0.0
- **Tailwind CSS** with **DaisyUI** for styling
- **MIME** library for handling file types

## Installation
1. Clone the repository:
```bash
git clone https://github.com/HassanZohaib121/image-handling.git
cd image-handling
```

2. Install dependencies:
```bash
npm install
```

## Development
Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Build
Build the app for production:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## Linting
Run ESLint to analyze code quality:
```bash
npm run lint
```

## Project Structure
```
.
├── public
│   └── images
├── src
│   ├── app
│   │   └── page.tsx
│   └── lib
│       └── actions.ts
├── styles
│   └── globals.css
└── package.json
```

## Usage
- **Single Image Upload:** Select an image under "Single Image Handling" and submit.
- **Multiple Image Upload:** Select multiple images under "Multiple Image Handling" and submit.
- Check the console for uploaded file paths.

## License
This project is licensed under the MIT License.

