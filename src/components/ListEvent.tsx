import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link, Stack, Typography, styled } from "@mui/material";
import { FC } from "react";
import { CardEvent } from "./CardEvent";
import { Link as RouterLink } from "react-router-dom";

type Artist = {
  id: number;
  name: string;
  img: string;
  location: string;
  date: Date;
};

const GradientTypography = styled(Typography)({
  background: "linear-gradient(90deg, #244067, rgba(15, 78, 166, 0.77))",
  WebkitBackgroundClip: "text" /* For older WebKit browsers */,
  backgroundClip: "text",
  color: "transparent",
  display: "inline",
});

export const ListEvent: FC<{ title: string; [key: string]: any }> = ({
  title,
  ...props
}) => {
  const events: Artist[] = [
    {
      id: 0,
      name: "Red Hot Chilli Peppers",
      img: "/images/red_hot.png",
      location: "Rock Cafe",
      date: new Date(),
    },
    {
      id: 1,
      name: "Yzomanidas",
      img: "/images/yzomanidas.png",
      location: "Rock Cafe",
      date: new Date(),
    },
    {
      id: 2,
      name: "Girl In Red",
      img: "/images/girl_in_red.png",
      location: "Rock Cafe",
      date: new Date(),
    },
    {
      id: 3,
      name: "Green Day",
      img: "/images/green_day.png",
      location: "Rock Cafe",
      date: new Date(),
    },
    {
      id: 4,
      name: "Arctic Monkeys",
      img: "/images/arctic_monkeys.png",
      location: "Rock Cafe",
      date: new Date(),
    },
  ];

  return (
    <div {...props}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "13px 0",
        }}
      >
        <h2>
          <GradientTypography fontWeight={900} fontSize={"22px"}>
            {title}
          </GradientTypography>
        </h2>
        <Link
          href="#"
          underline="hover"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          View All
          <ChevronRightIcon />
        </Link>
      </div>

      <Stack direction="row" spacing={4} justifyContent="space-between">
        {events.map((event) => (
          <RouterLink to={`/event-detail/${event.id}`} key={event.id}>
            <CardEvent
              name={event.name}
              img={event.img}
              key={event.id}
              location={event.location}
              date={event.date}
            />
          </RouterLink>
        ))}
      </Stack>
    </div>
  );
};
