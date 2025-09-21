# Contact Book Application

A full-stack web application for managing contacts with a modern, responsive interface. Built with React and Node.js, featuring real-time validation, pagination, and a clean user interface.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Add Contacts**: Create new contacts with name, email, and phone number
- **View Contacts**: Display all contacts in a clean, organized layout
- **Delete Contacts**: Remove unwanted contacts with confirmation
- **Pagination**: Navigate through contacts efficiently (10 per page)
- **Input Validation**: Real-time client-side and server-side validation
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Error Handling**: User-friendly error messages and loading states
- **Modern UI**: Clean, professional interface with smooth interactions

## 🛠️ Tech Stack

### Frontend
- **React** (v18.2.0) - UI library
- **Vite** - Build tool and development server
- **Axios** - HTTP client for API calls
- **CSS3** - Styling with responsive design

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **CORS** - Cross-origin resource sharing
- **Dotenv** - Environment variable management

## 📚 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (v5.0 or higher) - [Download](https://www.mongodb.com/try/download/community)
- **Git** - [Download](https://git-scm.com/)

## 🚀 Installation

### Clone the Repository

```bash
git clone https://github.com/yourusername/contact-book-app.git
cd contact-book-app
```

### Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the backend directory:

```env
MONGODB_URI=mongodb://localhost:27017/contactbook
PORT=5000
```

For MongoDB Atlas (cloud), use:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/contactbook
PORT=5000
```

### Frontend Setup

Open a new terminal and navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

## ▶️ Running the Application

### Start MongoDB

If using local MongoDB:

```bash
mongod
```

### Start the Backend Server

In the backend directory:

```bash
# Development mode with auto-reload
npm run dev

# OR production mode
npm start
```

The server will start at [http://localhost:5000](http://localhost:5000)

### Start the Frontend Application

In the frontend directory:

```bash
npm run dev
```

The application will open at [http://localhost:5173](http://localhost:5173)

## 📡 API Documentation

### Base URL

```
http://localhost:5000/api
```

### Endpoints

#### 1. Get All Contacts (Paginated)

- **URL**: `/contacts`
- **Method**: GET
- **Query Parameters**:
  - `page` (optional): Page number (default: 1)
  - `limit` (optional): Contacts per page (default: 10)

**Response:**

```json
{
  "contacts": [
    {
      "_id": "...",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "1234567890",
      "createdAt": "...",
      "updatedAt": "..."
    }
  ],
  "currentPage": 1,
  "totalPages": 5,
  "totalContacts": 50
}
```

#### 2. Create New Contact

- **URL**: `/contacts`
- **Method**: POST

**Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890"
}
```

**Response (201 Created):**

```json
{
  "_id": "...",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "createdAt": "...",
  "updatedAt": "..."
}
```

#### 3. Delete Contact

- **URL**: `/contacts/:id`
- **Method**: DELETE

**Response (204 No Content)**

### Error Responses

- **400 Bad Request**: Validation errors  
- **404 Not Found**: Contact not found  
- **500 Internal Server Error**: Server errors  

## 📁 Project Structure

```
contact-book-app/
├── backend/
│   ├── models/
│   │   └── Contact.js          # Mongoose schema
│   ├── routes/
│   │   └── contacts.js         # API routes
│   ├── .env                    # Environment variables
│   ├── .gitignore
│   ├── package.json
│   └── server.js               # Express server
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ContactForm.jsx     # Add contact form
│   │   │   ├── ContactForm.css
│   │   │   ├── ContactList.jsx     # Contact list display
│   │   │   ├── ContactList.css
│   │   │   ├── ContactItem.jsx     # Individual contact
│   │   │   ├── ContactItem.css
│   │   │   ├── Pagination.jsx      # Pagination controls
│   │   │   └── Pagination.css
│   │   ├── App.jsx                 # Main app component
│   │   ├── App.css
│   │   ├── main.jsx               # Entry point
│   │   └── index.css              # Global styles
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

## 💻 Usage

### Adding a Contact

- Fill in the contact form with:
  - Name (required)
  - Email (required, must be valid email format)
  - Phone (required, must be exactly 10 digits)
- Click **"Add Contact"**
- The new contact appears at the top of the list

### Viewing Contacts

- Contacts are displayed in cards showing all information
- 10 contacts are shown per page
- Use pagination controls to navigate between pages

### Deleting a Contact

- Click the **"Delete"** button on any contact card
- Confirm the deletion in the popup
- The contact is removed immediately

### Responsive Features

- On mobile devices, the layout adjusts for better usability
- Contact cards stack vertically
- Form fields expand to full width

## 🤝 Contributing

1. Fork the repository  
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)  
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)  
4. Push to the branch (`git push origin feature/AmazingFeature`)  
5. Open a Pull Request  

### Development Guidelines

- Follow existing code style  
- Add comments for complex logic  
- Update README for new features  
- Test on both desktop and mobile  
- Ensure all validations work properly  

## 🐛 Troubleshooting

### Common Issues

**MongoDB Connection Error**  
- Ensure MongoDB is running  
- Check connection string in `.env`  
- Verify network access for cloud databases  

**Port Already in Use**  
- Change ports in `.env` or `vite.config.js`  
- Kill existing processes on those ports  

**Pagination Not Showing**  
- Pagination appears only with more than 10 contacts  
- Add more contacts to test pagination  

**CORS Error**  
- Ensure backend is running on correct port  
- Check proxy configuration in `vite.config.js`  

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built as a demonstration of full-stack development skills  
- Inspired by modern contact management applications  
- Thanks to the open-source community for the amazing tools  
