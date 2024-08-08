# Web-chatApp
The Web-chatApp is a real-time chat application that allows users to communicate with each other in an interactive manner. It features functionalities such as user authentication, real-time messaging, and user management. The application is designed to be responsive, providing a seamless experience across various devices.

#### Technologies Used:
1. **Frontend:**
   - **React**: For building the user interface.
   - **Material-UI**: For UI components and styling.
   - **React Router**: For client-side routing.
2. **Backend:**
   - **Node.js**: JavaScript runtime environment.
   - **Express**: Web framework for Node.js.
   - **Socket.io**: For real-time communication.
3. **Database:**
   - **MongoDB**: NoSQL database for storing user data and messages.
   - **Mongoose**: ODM for MongoDB.
4. **Authentication:**
   - **JWT**: For securing user authentication.

#### Functionality:
- Real-time chat communication.
- User authentication and authorization.
- Message history storage and retrieval.
- Online status indication.
- Responsive design for different devices.

#### Local Setup Instructions:
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/manni2000/Web-chatApp.git
   cd Web-chatApp
   ```

2. **Setup Backend:**
   ```bash
   cd server
   npm install
   npm start
   ```

3. **Setup Frontend:**
   ```bash
   cd ../client
   npm install
   npm start
   ```

4. **Environment Variables:**
   - Create a `.env` file in the `server` directory with the following:
     ```env
     MONGO_URI=your_mongodb_uri
     JWT_SECRET=your_jwt_secret
     ```

5. **Access the Application**: Open your browser and navigate to `http://localhost:3000`
   
# Preview
