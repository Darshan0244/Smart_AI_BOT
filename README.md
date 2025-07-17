# Smart AI Bot 🤖

A powerful, multi-modal AI assistant built with React that combines conversational AI capabilities with advanced image processing and generation features.

## 🚀 Features

### Core Capabilities
- **Intelligent Chat Interface** - Natural language conversations powered by Google's Gemini AI
- **Image Analysis** - Upload and analyze images with AI-powered insights
- **AI Image Generation** - Create custom images from text prompts using Hugging Face models
- **Multi-Modal Interactions** - Seamlessly switch between text and image-based conversations

### User Experience
- **Intuitive Interface** - Clean, modern design with responsive layout
- **Real-time Processing** - Instant responses and image generation
- **Context Awareness** - Maintains conversation history and context
- **Mobile Responsive** - Optimized for all device sizes

## 🛠️ Technology Stack

- **Frontend**: React.js with Context API for state management
- **AI Integration**: Google Gemini API for conversational AI
- **Image Generation**: Hugging Face Inference API
- **Styling**: Custom CSS with modern design principles
- **Icons**: React Icons library
- **File Handling**: FileReader API for image processing


## ⚡ Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd smartAiBot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure API Keys**
   - Create environment variables for your API keys
   - Set up Google Gemini API credentials
   - Configure Hugging Face API token

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎯 Usage

### Chat Mode
- Click "Let's Chat" to start a conversation
- Type your questions or requests in the input field
- Receive intelligent responses powered by Gemini AI

### Image Upload
- Click "Upload Image" to analyze existing images
- Select an image from your device
- Ask questions about the uploaded image

### Image Generation
- Click "Generate Image" to create new images
- Describe what you want to see in text
- AI generates custom images based on your prompt

## 🏗️ Project Structure

```
smartAiBot/
├── src/
│   ├── components/
│   │   └── Chat.jsx          # Chat interface component
│   ├── pages/
│   │   └── Home.jsx          # Main application page
│   ├── context/
│   │   └── UserContext.jsx   # Global state management
│   ├── services/
│   │   ├── gemini.js         # Gemini AI integration
│   │   └── huggingFace.js    # Image generation API
│   ├── App.jsx               # Root component
│   ├── App.css               # Global styles
│   └── main.jsx              # Application entry point
├── public/                   # Static assets
└── package.json              # Project dependencies
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_GEMINI_API_KEY=your_gemini_api_key
VITE_HUGGINGFACE_TOKEN=your_huggingface_token
```

### API Setup
- **Gemini AI**: Obtain API key from Google AI Studio
- **Hugging Face**: Get your token from Hugging Face Hub

## 🎨 Customization

### Styling
- Modify `App.css` for global styles
- Responsive breakpoints configured for mobile devices
- CSS custom properties for easy theme customization

### Features
- Extend AI capabilities by modifying service files
- Add new conversation modes in the context provider
- Customize UI components for different use cases

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Vercel**: Connect your repository for automatic deployments
- **Netlify**: Drag and drop the build folder
- **GitHub Pages**: Use the built-in deployment action

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Google Gemini AI for conversational capabilities
- Hugging Face for image generation models
- React community for excellent documentation and tools

