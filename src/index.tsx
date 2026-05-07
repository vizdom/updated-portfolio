import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import GameDesign from "./routes/GameDesign";
import reportWebVitals from './reportWebVitals';
import VisualArt from "./routes/VisualArt";
import Writing from "./routes/Writing";
import DnDAdventure from "./routes/ItemPages/DnDAdventure";
import MobyDickChapter from "./routes/ItemPages/MobyDickChapter";
import DigitalPainting from "./routes/ItemPages/DigitalPainting";
import MinecraftBuilds from "./routes/ItemPages/MinecraftBuilds";
import UnderConstruction from "./routes/UnderConstruction";
import PhotoClue from "./routes/ItemPages/PhotoClue";
import StoryPage from "./routes/ItemPages/StoryPage";
import Drawing from "./routes/ItemPages/Drawing";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        //errorElement: <ErrorPage></ErrorPage>,
    },
    {
        path: "/construction",
        element: <UnderConstruction />
    },
    {
        path: "/gamedesign",
        element: <GameDesign />,
    },
    {
        path: "/writing",
        element: <Writing />,
    },
    {
        path: "/visualart",
        element: <VisualArt />,
    },
    {
        path: "/writing/dndadventure",
        element: <DnDAdventure />,
    },
    {
        path: "/writing/mobydick",
        element: <MobyDickChapter />,
    },
    {
        path: "/writing/stories",
        element: <StoryPage />,
    },
    {
        path: "/visualart/digitalpainting",
        element: <DigitalPainting />,
    },
    {
        path: "/visualart/drawing",
        element: <Drawing />,
    },
    {
        path: "/visualart/minecraft",
        element: <MinecraftBuilds />,
    },
    {
        path: "/gamedesign/photoclue",
        element: <PhotoClue />,
    },
    {
        path: "/gamedesign/shadowdepth",
        element: <GameDesign />,
    },
], {basename: '/updated-portfolio/'});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
