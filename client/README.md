# Zoot Game Client Template

The **Zoot Game Client Template** project is a **Nextjs** project designed to seamlessly integrate games into the **_Zoot_** platform.

This template equips developers with the necessary tools to integrate new games, providing a comprehensive setup for rendering games, managing play controls, accessing our **RGS API and socket**, and facilitating communication with our platform to access user information and session data.

## Getting Started

To get started, install all the dependencies:

```bash
npm install
```

Next, create a copy of `.env.example` in the client directory named `.env` and set up the game environment variables.

### Game with RGS socket

If your game use the socket, you can configure it like this:

```js
# SOCKET version
NEXT_PUBLIC_USE_SOCKET= false
NEXT_PUBLIC_EL_ZOOT_GAME_SOCKET_URL=wss://zoot-template-game-api.enigmalakecasino.com
NEXT_PUBLIC_DISPLAY_GAME_NAME=Game Name
NEXT_PUBLIC_SOCKET_PATH=game-name
```

You can begin editing the page by modifying `./site/components/game/components/grid/SocketGameScene.tsx` to suit your needs. The page will automatically update as you make changes to the file.

You can render your game view in `SocketGameScene` and update the game state accordingly.

Feel free to add additional information to the `registerPlay` payload.

### Game with RGS API

If your games use the API, you can configure it like this:

```js

# HTTP version
NEXT_PUBLIC_EL_ZOOT_GAME_SERVER_URL=http://zoot-template-game-api.enigmalakecasino.com
NEXT_PUBLIC_DISPLAY_GAME_NAME=Game Name
```

You can begin editing the page by modifying `./site/components/game/components/grid/APIGameScene.tsx` to suit your needs. The page will automatically update as you make changes to the file.

You can render your game view in `APIGameScene` and update the game state accordingly.

Feel free to add additional information to the `registerPlay` payload.

### Start the client server

Then, execute the command to run the application locally, and open [http://localhost:3000](http://localhost:3000) in your browser to view the result.

```bash
 npm run dev
```

### Zoot Game Integration SDK

The `./site/components/game/BasicGamePage.tsx` component facilitates communication with our platform by listening to EL events and configuring **user information**, **user session**, **user balance**, and **currency**.

Furthermore, it allows you to request layout adjustments and **expand / collapse** the game view on our platform.

All events are handled by our **[Enigma Lake Zoot - Game Integration SDK](https://www.npmjs.com/package/@enigma-lake/zoot-platform-sdk)**
