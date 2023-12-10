import { createBrowserRouter } from "react-router-dom";
import { PageBlog } from "./pages/Blog";
import { Feedback } from "./pages/Feedback";
import { PageMain } from "./pages/Main";
import { ForPerformers } from "./pages/ForPerformers";
import { ArtistDetail } from "./pages/ArtistDetail";
import { PageSearch } from "./pages/Search";
import {EventDetail} from "./pages/EventDetail.tsx";
import {Artists} from "./pages/Artists.tsx";

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
    element: <EventDetail />,
  },
  {
    path: "search",
    element: <PageSearch />,
  },
  {
    path: "artists",
    element: <Artists />
  }
]);
