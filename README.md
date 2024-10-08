# SportiGo

SportiGo is a MERN stack application designed to connect sports enthusiasts who want to play together. Whether you're looking for a partner for a game of basketball, soccer, or any other sport, SportiGo helps you find players in your area to form matches and enjoy the game!

## Features

- **User Authentication**: Secure sign-up and login to create a personalized experience.
- **Matchmaking**: Easily find and connect with users looking to play the same sport.
- **Profile Management**: Create and edit your profile to showcase your interests and skills.
- **Real-time Notifications**: Receive updates when matches are created or when users respond to your requests.
- **Responsive Design**: Accessible on both desktop and mobile devices.

## Tech Stack

- **MongoDB**: For data storage.
- **Express.js**: Server-side framework for building APIs.
- **React**: Frontend library for building user interfaces.
- **Node.js**: JavaScript runtime for server-side development.

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/sportigo.git
   cd sportigo
   ```

2. Navigate to the server directory and install dependencies:
   ```bash
   cd server
   npm install
   ```

3. Navigate to the client directory and install dependencies:
   ```bash
   cd ../client
   npm install
   ```

4. Set up your MongoDB database and create a `.env` file in the server directory with your database URI:
   ```
   MONGO_URI=your_mongodb_uri
   ```

5. Start the server:
   ```bash
   cd server
   npm start
   ```

6. Start the client:
   ```bash
   cd ../client
   npm start
   ```

### Usage

- Sign up or log in to your account.
- Create a match request or browse available matches.
- Connect with other players and organize your game!

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create your feature branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeature
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thank you to the contributors and open-source community for your support!
