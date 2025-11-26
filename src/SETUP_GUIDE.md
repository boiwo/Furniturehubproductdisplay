# ROCKSTART FURNITURE HUB - Setup Guide

## How to Move This Project to VSCode

### Step 1: Download the Project Files

1. **Export all project files** from Figma Make
2. Create a new folder on your computer (e.g., `rockstart-furniture-hub`)
3. Copy all the files into this folder

### Step 2: Set Up Your Development Environment

1. **Install Node.js**
   - Go to https://nodejs.org/
   - Download and install the LTS (Long Term Support) version
   - Verify installation by opening a terminal and typing:
     ```bash
     node --version
     npm --version
     ```

2. **Install VSCode**
   - Go to https://code.visualstudio.com/
   - Download and install Visual Studio Code
   - Recommended extensions to install:
     - ESLint
     - Prettier - Code formatter
     - Tailwind CSS IntelliSense
     - ES7+ React/Redux/React-Native snippets

### Step 3: Open Project in VSCode

1. Open VSCode
2. Click **File > Open Folder**
3. Select your project folder (`rockstart-furniture-hub`)

### Step 4: Initialize the Project

1. **Open the integrated terminal** in VSCode (Terminal > New Terminal or Ctrl+`)

2. **Create package.json file** (if not already present):
   ```bash
   npm init -y
   ```

3. **Install dependencies**:
   ```bash
   npm install react react-dom
   npm install -D vite @vitejs/plugin-react typescript @types/react @types/react-dom
   npm install tailwindcss postcss autoprefixer
   npm install lucide-react recharts react-slick sonner@2.0.3
   npm install react-hook-form@7.55.0
   ```

4. **Initialize Tailwind CSS**:
   ```bash
   npx tailwindcss init -p
   ```

### Step 5: Create Configuration Files

1. **Create `vite.config.ts`** in the root folder:
   ```typescript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
   })
   ```

2. **Create `tsconfig.json`** in the root folder:
   ```json
   {
     "compilerOptions": {
       "target": "ES2020",
       "useDefineForClassFields": true,
       "lib": ["ES2020", "DOM", "DOM.Iterable"],
       "module": "ESNext",
       "skipLibCheck": true,
       "moduleResolution": "bundler",
       "allowImportingTsExtensions": true,
       "resolveJsonModule": true,
       "isolatedModules": true,
       "noEmit": true,
       "jsx": "react-jsx",
       "strict": true,
       "noUnusedLocals": true,
       "noUnusedParameters": true,
       "noFallthroughCasesInSwitch": true
     },
     "include": ["src"],
     "references": [{ "path": "./tsconfig.node.json" }]
   }
   ```

3. **Update `tailwind.config.js`**:
   ```javascript
   /** @type {import('tailwindcss').Config} */
   export default {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
       "./**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

4. **Create `index.html`** in the root folder:
   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>ROCKSTART FURNITURE HUB</title>
     </head>
     <body>
       <div id="root"></div>
       <script type="module" src="/main.tsx"></script>
     </body>
   </html>
   ```

5. **Create `main.tsx`** in the root folder:
   ```typescript
   import React from 'react'
   import ReactDOM from 'react-dom/client'
   import App from './App'
   import './styles/globals.css'

   ReactDOM.createRoot(document.getElementById('root')!).render(
     <React.StrictMode>
       <App />
     </React.StrictMode>,
   )
   ```

6. **Update `package.json`** scripts section:
   ```json
   "scripts": {
     "dev": "vite",
     "build": "vite build",
     "preview": "vite preview"
   }
   ```

### Step 6: Run the Project

1. In the VSCode terminal, run:
   ```bash
   npm run dev
   ```

2. Open your browser and go to `http://localhost:5173`

3. Your ROCKSTART FURNITURE HUB app should now be running!

---

## How to Deploy to GitHub Pages

### Step 1: Set Up Git and GitHub

1. **Install Git**
   - Go to https://git-scm.com/
   - Download and install Git
   - Verify installation:
     ```bash
     git --version
     ```

2. **Create a GitHub account**
   - Go to https://github.com/
   - Sign up for a free account

3. **Create a new repository**
   - Click the "+" icon in the top right
   - Select "New repository"
   - Name it `rockstart-furniture-hub`
   - Keep it **Public**
   - Don't initialize with README
   - Click "Create repository"

### Step 2: Configure Your Project for GitHub Pages

1. **Install gh-pages package**:
   ```bash
   npm install -D gh-pages
   ```

2. **Update `vite.config.ts`** to set the base path:
   ```typescript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     base: '/rockstart-furniture-hub/', // Replace with your repo name
   })
   ```

3. **Add deployment scripts to `package.json`**:
   ```json
   "scripts": {
     "dev": "vite",
     "build": "vite build",
     "preview": "vite preview",
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

### Step 3: Initialize Git in Your Project

1. Open terminal in VSCode

2. Initialize Git:
   ```bash
   git init
   ```

3. Create `.gitignore` file in the root folder:
   ```
   node_modules
   dist
   .env
   .DS_Store
   ```

4. Add all files to Git:
   ```bash
   git add .
   ```

5. Make your first commit:
   ```bash
   git commit -m "Initial commit - ROCKSTART FURNITURE HUB"
   ```

### Step 4: Connect to GitHub and Push

1. Add your GitHub repository as remote (replace with your username):
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/rockstart-furniture-hub.git
   ```

2. Push your code to GitHub:
   ```bash
   git branch -M main
   git push -u origin main
   ```

### Step 5: Deploy to GitHub Pages

1. Run the deploy command:
   ```bash
   npm run deploy
   ```

2. Wait for the deployment to complete

3. Go to your GitHub repository settings:
   - Click "Settings" tab
   - Click "Pages" in the left sidebar
   - Under "Source", select "gh-pages" branch
   - Click "Save"

4. Your site will be live at:
   ```
   https://YOUR_USERNAME.github.io/rockstart-furniture-hub/
   ```

### Step 6: Update Your Site

Whenever you make changes:

1. Make your changes in VSCode
2. Save all files
3. Test locally with `npm run dev`
4. When ready to deploy:
   ```bash
   git add .
   git commit -m "Description of your changes"
   git push origin main
   npm run deploy
   ```

---

## Project Structure

```
rockstart-furniture-hub/
├── components/
│   ├── ui/                    # ShadCN UI components
│   ├── figma/                 # Figma components
│   ├── Header.tsx
│   ├── ProductCard.tsx
│   ├── FilterSidebar.tsx
│   ├── Cart.tsx
│   └── ProductModal.tsx
├── data/
│   └── products.ts            # Product data (35 items)
├── types/
│   └── product.ts             # TypeScript types
├── styles/
│   └── globals.css            # Global styles
├── App.tsx                    # Main app component
├── main.tsx                   # Entry point
├── index.html                 # HTML template
├── package.json               # Dependencies
├── vite.config.ts             # Vite configuration
├── tailwind.config.js         # Tailwind CSS config
└── tsconfig.json              # TypeScript config
```

---

## Troubleshooting

### Common Issues

1. **Module not found errors**
   - Run `npm install` to install all dependencies

2. **Port already in use**
   - Change the port in `vite.config.ts`:
     ```typescript
     server: {
       port: 3000
     }
     ```

3. **Tailwind styles not loading**
   - Make sure `globals.css` is imported in `main.tsx`
   - Check that Tailwind config includes all content paths

4. **GitHub Pages showing blank page**
   - Verify the `base` path in `vite.config.ts` matches your repo name
   - Check browser console for errors

5. **Images not loading**
   - Ensure all image URLs are valid
   - Check network connection

---

## Additional Resources

- **React Documentation**: https://react.dev/
- **Vite Documentation**: https://vitejs.dev/
- **Tailwind CSS**: https://tailwindcss.com/
- **GitHub Pages**: https://pages.github.com/
- **VSCode Tips**: https://code.visualstudio.com/docs

---

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Search for similar issues on GitHub
3. Review the documentation links provided

---

**Congratulations!** You now have ROCKSTART FURNITURE HUB running locally and deployed to GitHub Pages! 🎉
