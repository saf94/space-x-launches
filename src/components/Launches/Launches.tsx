import { useQuery } from "@apollo/client";
import { GET_LAUNCHES_PAST } from "../../api/queries";
import "./Launches.css";

type LaunchesPast = {
  id: string;
  mission_name: string;
  launch_date_utc: string;
  rocket: {
    rocket_name: string;
  };
  links: {
    article_link: string;
    video_link: string;
  };
};

type LaunchesPastResult = {
  launchesPast: LaunchesPast[];
};

const Launches = (): JSX.Element => {
  const { loading, error, data } =
    useQuery<LaunchesPastResult>(GET_LAUNCHES_PAST);

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>Error: no launches found</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log("data", data);

  return (
    <>
      <h1>Space X Rocket Launches History</h1>
      <section className="launchesSection">
        {data.launchesPast.map(
          ({ id, mission_name, launch_date_utc, rocket, links }) => (
            <div className="launchContainer" key={id}>
              <div className="launchHeader">
                <h3 className="missionName">{mission_name}</h3>
                <p>Date of launch: {launch_date_utc}</p>
              </div>
              <p>Name of rocket: {rocket.rocket_name}</p>
              <p>Article link: {links.article_link}</p>
              <p>Video link: {links.video_link}</p>
            </div>
          )
        )}
      </section>
    </>
  );
};

export default Launches;
