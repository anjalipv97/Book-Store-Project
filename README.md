# Book-Store-Project

This repository contains a Book Store App built using MERN Stack.This application is a Book Management System that allows users to manage their book collection by performing various operations like creating, editing,showing details and deleting books.


## Features

### 1. **Login/Sign up**
   - Users can sign up or log in with their credentials.
   - Only registered users can access the application.

### 2. **Create Book**
   - Users can create a new book entry.
   - Details required include Book Title, Published Year, and Author's Name.

### 3. **Edit Book**
   - Users can modify the details of the books they've created.
   - Update book information like Title, Published Year, or Author.

### 4. **Show Details**
   - Displays a comprehensive list of all books.
   - Users can view details such as Book Title, Published Year, and Author.

### 5. **Delete Book**
   - Users have the ability to remove a book from their collection.

## Technologies Used

- Frontend: React.js, React Router, Tailwind CSS
- Backend: Node.js, Express.js, MongoDB 
- Authentication: JWT (JSON Web Tokens)

## Folder Structure

- `/app`: Contains the frontend React application.
- `/server`: Contains the backend Node.js server.

## How to Use or run the app in development environment

1. Clone the repository using 'git clone https://github.com/anjalipv97/Book-Store-Project.git'
2. Go to '/app' folder and do: 'npm install' to install dependencies.
3. For running frontend in development environment, do a small config change. Open the 'vite.config.js' file and change the server port value to '5000'
4. To run the frontend app, do: 'npm run dev'
5. Go to '/server' folder and do: 'npm install' to install dependencies. 
6. To run the backed server, do: 'npm run start'

## API Endpoints

- `POST /signup`: Register a new user.
- `POST /login`: Authenticate and log in a user.
- `POST /books`: Create a new book.
- `GET /books`: Retrieve all books.
- `GET /books/:id`: Retrieve details of a specific book.
- `PUT /books/:id`: Update details of a specific book.
- `DELETE /books/:id`: Delete a specific book.
