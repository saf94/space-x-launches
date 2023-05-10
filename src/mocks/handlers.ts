// src/mocks/handlers.js
import { graphql } from "msw";

export const handlers = [
  graphql.query("LaunchesPast", (req, res, ctx) => {
    return res(
      ctx.data({
        launchesPast: [
          {
            id: "5eb87cd9ffd86e000604b32a",
            launch_date_utc: "2006-03-24T22:30:00.000Z",
            links: {
              __typename: "LaunchLinks",
              article_link:
                "https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html",
              video_link: "https://www.youtube.com/watch?v=0a_00nJ_Y88",
            },
            mission_name: "FalconSat",
            rocket: { __typename: "LaunchRocket", rocket_name: "Falcon 1" },
            __typename: "Launch",
          },
          {
            id: "5eb87cdaffd86e000604b32b",
            launch_date_utc: "2007-03-21T01:10:00.000Z",
            links: {
              __typename: "LaunchLinks",
              article_link:
                "https://www.space.com/3590-spacex-falcon-1-rocket-fails-reach-orbit.html",
              video_link: "https://www.youtube.com/watch?v=Lk4zQ2wP-Nc",
            },
            mission_name: "DemoSat",
            rocket: { __typename: "LaunchRocket", rocket_name: "Falcon 9" },
            __typename: "Launch",
          },
        ],
      })
    );
  }),
];
