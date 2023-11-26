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
    path: "artist-detail",
    element: <ArtistDetail />,
  },
  {
    path: "place-detail",
    element: <div>Place Detail</div>,
  },
  {
    path: "event-detail",
    element: <ArtistDetail />,
  },
  {
    path: "search",
    element: <div>Search Result Page</div>,
  },
]);
