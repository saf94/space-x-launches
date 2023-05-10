import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Launches from "./Launches";
import { server } from "../../mocks/server";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

describe("Launches page", () => {
  const client = new ApolloClient({
    uri: "https://spacex-production.up.railway.app/",
    cache: new InMemoryCache(),
  });

  const TestWrapper = (children: React.ReactElement) => (
    <ApolloProvider client={client}>{children}</ApolloProvider>
  );

  beforeAll(() => server.listen());
  afterAll(() => server.close());
  afterEach(() => server.resetHandlers());

  test("renders page", async () => {
    render(TestWrapper(<Launches />));
    await waitFor(() => {
      expect(
        screen.getByText(/Space X Rocket Launches History/i)
      ).toBeInTheDocument();
    });
  });

  test("when data returned, renders launch information", async () => {
    render(TestWrapper(<Launches />));
    const firstLaunchName = await screen.findByText("FalconSat");
    const firstLaunchDate = await screen.findByText(
      "Date of launch: 24/03/2006"
    );
    const firstLaunchRocket = await screen.findByText(
      "Name of rocket: Falcon 1"
    );
    const firstLaunchArticleLink = await screen.findByText(
      "https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html"
    );
    const firstLaunchVideoLink = await screen.findByText(
      "https://www.youtube.com/watch?v=0a_00nJ_Y88"
    );

    expect(firstLaunchName).toBeInTheDocument();
    expect(firstLaunchDate).toBeInTheDocument();
    expect(firstLaunchRocket).toBeInTheDocument();
    expect(firstLaunchArticleLink).toBeInTheDocument();
    expect(firstLaunchVideoLink).toBeInTheDocument();

    const secondLaunchName = await screen.findByText("DemoSat");
    const secondLaunchDate = await screen.findByText(
      "Date of launch: 21/03/2007"
    );
    const secondLaunchRocket = await screen.findByText(
      "Name of rocket: Falcon 9"
    );
    const secondLaunchArticleLink = await screen.findByText(
      "https://www.space.com/3590-spacex-falcon-1-rocket-fails-reach-orbit.html"
    );
    const secondLaunchVideoLink = await screen.findByText(
      "https://www.youtube.com/watch?v=Lk4zQ2wP-Nc"
    );
    expect(secondLaunchName).toBeInTheDocument();
    expect(secondLaunchDate).toBeInTheDocument();
    expect(secondLaunchRocket).toBeInTheDocument();
    expect(secondLaunchArticleLink).toBeInTheDocument();
    expect(secondLaunchVideoLink).toBeInTheDocument();
  });
});
