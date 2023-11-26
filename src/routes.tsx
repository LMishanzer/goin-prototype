import { createBrowserRouter } from "react-router-dom";
import { PageBlog } from "./pages/Blog";
import { Feedback } from "./pages/Feedback";
import { PageMain } from "./pages/Main";
import { ForPerformers } from "./pages/ForPerformers";
import { ArtistDetail } from "./pages/ArtistDetail";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <PageMain />,
  },
  {
    path: "for-performers",
    element: <ForPerformers />,
  },
  {
    path: "feedback",
    element: <Feedback />,
  },
  {
    path: "blog-page",
    element: <PageBlog />,
  },
  {
    path: "artist-detail/:artistId",
    element: <ArtistDetail />,
  },
  {
    path: "place-detail", // todo: create page? do we need it?
    element: <div>Place Detail</div>,
  },
  {
    path: "event-detail/:eventId",
    element: <ArtistDetail />,
  },
  {
    path: "search",
    element: <div>Search Result Page</div>,
  },
]);
