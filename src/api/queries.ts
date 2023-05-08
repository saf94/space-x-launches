import gql from "graphql-tag";

export const GET_LAUNCHES_PAST = gql`
  query LaunchesPast {
    launchesPast {
      id
      mission_name
      launch_date_utc
      rocket {
        rocket_name
      }
      links {
        article_link
        video_link
      }
    }
  }
`;
