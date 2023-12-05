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

- Frontend: React.js, React Router, Axios
- Backend: Node.js, Express.js, MongoDB (or any other database)
- Authentication: JWT (JSON Web Tokens)

## How to Use

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the backend server.
4. Start the frontend server.

## Folder Structure

- `/client`: Contains the frontend React application.
- `/server`: Contains the backend Node.js server.

## Setup

1. **Backend Setup**:
   - Configure environment variables (e.g., database connection).
   - Run `npm start` in the `/server` directory to start the server.

2. **Frontend Setup**:
   - Run `npm start` in the `/client` directory to start the React app.

## API Endpoints

- `POST /signup`: Register a new user.
- `POST /login`: Authenticate and log in a user.
- `POST /books`: Create a new book.
- `GET /books`: Retrieve all books.
- `GET /books/:id`: Retrieve details of a specific book.
- `PUT /books/:id`: Update details of a specific book.
- `DELETE /books/:id`: Delete a specific book.

