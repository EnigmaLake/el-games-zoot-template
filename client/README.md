# EL Zoot Game Client Template

The Zoot Game Client Template project is a Nextjs project designed to seamlessly integrate games into the Enigma Lake Zoot platform.

This template provides developers with the necessary tools to integrate new games, offering a full setup for rendering games, managing play controls, accessing our RGS API and socket, and facilitating communication with our platform for accessing user information and session data

## Getting Started

To begin, install all the dependencies:

```bash
npm install
```

Next, create a copy of `.env.example` in the client directory named `.env` and set up the game name:
```bash
NEXT_PUBLIC_DISPLAY_GAME_NAME=Your Game Name
NEXT_PUBLIC_GAME_NAME=your-game-name
```

Then, execute the npm run dev command to run the application locally, and open [http://localhost:3000](http://localhost:3000) in your browser to view the result.

You can begin editing the page by modifying ./site/components/game/BasicGamePage. The page will automatically update as you make changes to the file.


BasicGamePage facilitates communication with our platform by listening to EL events and configuring user information, user session, user balance, and currency. Furthermore, it allows you to request layout adjustments and expand the game view from our platform.

Moreover, it establishes a connection to the RGS socket if this type of communication is necessary; otherwise, you can remove it.
