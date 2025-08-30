# GEMINI.md

## Project Overview

This project is a web application called "The Art of Saying No". It helps users learn how to decline requests politely and effectively. The application takes a user's situation as input and generates three different ways to say "no" using a local AI model. It also provides an "Advice of the day".

The project is built with the following technologies:

*   **Frontend:** React, TypeScript, Material-UI
*   **Backend:** Node.js, Express, TypeScript
*   **AI Model:** Ollama with the `phi` model

## Project Structure

The project is divided into two main directories:

*   `frontend`: Contains the React frontend application.
*   `backend`: Contains the Node.js backend server.

## How to Run the Application

1.  **Install Dependencies:**
    *   Navigate to the `frontend` directory and run `npm install`.
    *   Navigate to the `backend` directory and run `npm install`.

2.  **Set up the AI Model:**
    *   Install Ollama from the official website: [https://ollama.ai/](https://ollama.ai/)
    *   Download the `phi` model by running the following command in your terminal:
        ```bash
        ollama pull phi
        ```

3.  **Start the Servers:**
    *   Start the backend server by running `npm start` in the `backend` directory.
    *   Start the frontend application by running `npm start` in the `frontend` directory.
    *   Start the Ollama server by running `ollama run phi` in your terminal.

4.  **Access the Application:**
    *   Open your web browser and navigate to `http://localhost:3000`.

## Key Files

### Frontend (`frontend/src`)

*   `App.tsx`: The main component of the React application. It contains the UI and the logic for interacting with the backend.
*   `index.tsx`: The entry point of the React application.
*   `package.json`: The file that contains the dependencies and scripts for the frontend application.

### Backend (`backend/src`)

*   `index.ts`: The main file of the backend server. It contains the Express server and the API endpoints for generating responses and advice.
*   `package.json`: The file that contains the dependencies and scripts for the backend server.
