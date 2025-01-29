# Dev-Charcha

**Dev-Charcha** is a community platform designed for developers to discuss and collaborate on various programming languages, frameworks, and libraries. Built with **Next.js** and powered by **Stream Chat**, this platform fosters communication and mutual assistance among developers worldwide.

---

## Features

- **Language-Specific Channels**: Join channels dedicated to your preferred programming languages and frameworks.
- **Real-Time Messaging**: Engage in seamless real-time conversations.
- **User Authentication**: Secure login and sign-up system using Clerk.
- **Responsive Design**: Fully optimized for desktop and mobile devices.
- **Customizable Profile**: Personalize your user profile with relevant details.
- **Stream Chat Integration**: Leverage the robust capabilities of Stream Chat for messaging and channel management.

---

## Tech Stack

### Frontend
- **Framework**: Next.js
- **State Management**: React (part of MERN stack)
- **Styling**: Tailwind CSS

### Backend
- **Authentication**: Clerk
- **Database**: MongoDB
- **Server**: Express.js
- **Messaging**: Stream Chat APIs

### Hosting
- Deployed on platforms like Vercel or Netlify (for frontend) and other hosting services (for backend, if applicable).

---

## Installation

Follow these steps to set up the project locally:

### Prerequisites
- Node.js (version 16+)
- npm or yarn
- MongoDB instance
- Stream Chat API credentials
- Clerk API credentials

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/dev-charcha.git
   cd dev-charcha
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add the following environment variables:
   ```env
   NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
   NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
   MONGODB_URI=your_mongodb_connection_string
   STREAM_API_SECRET=your_stream_api_secret
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## Usage

1. Sign up or log in to access the platform.
2. Explore language-specific channels and join discussions.
3. Share knowledge, ask questions, and help others in real-time.

---

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add a meaningful commit message"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Create a Pull Request.

---


## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Stream Chat](https://getstream.io/chat/)
- [Clerk](https://clerk.dev/)
- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)
- Open-source contributors

---

## Contact

For queries or suggestions, feel free to contact:
- **Email**: krishmakadiya2005@gmil.com
---

