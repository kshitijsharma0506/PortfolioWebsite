# Modern Portfolio Website

![Portfolio Preview](https://github.com/user-attachments/assets/2ff613d6-4e13-430a-9ecd-314f460502ae)

A modern, responsive portfolio website built with React and Vite, featuring a clean design, smooth animations, and interactive components.

## 🚀 Features

- **Responsive Design** - Seamless experience across all devices
- **Dark/Light Mode** - Automatic theme switching based on system preferences
- **Interactive Projects Grid** - Showcase your work with style
- **Contact Form** - Integrated EmailJS for direct communication
- **Performance Optimized** - 90+ Lighthouse score
- **Animations** - Smooth transitions and micro-interactions

## 🛠️ Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** CSS
- **Icons:** Lucide React
- **Email Service:** EmailJS
- **Deployment:** Netlify

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file in the root directory:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server:
```bash
npm run dev
```

## 🔧 Configuration

### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service
3. Create an email template
4. Copy your credentials to the `.env` file

Example email template structure:
```javascript
{
  to_name: "Your Name",
  from_name: "{{from_name}}",
  message: "{{message}}",
  reply_to: "{{reply_to}}"
}
```

## 📝 Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_EMAILJS_SERVICE_ID` | EmailJS Service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS Template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS Public Key |

## 🚀 Deployment

### Netlify Deployment

1. Create a new site in Netlify
2. Connect your repository
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Add environment variables in Netlify dashboard
5. Deploy!

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Test the production build locally:
```bash
npm run preview
```

3. Deploy the `dist` folder to your hosting provider

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints.
## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, email kshitijsharma5620@gmail.com or open an issue in the repository.
