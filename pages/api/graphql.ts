import { ApolloServer } from "apollo-server-micro";
import { PageConfig } from "next";
import { schema } from "../../graphql/schema";
import { createContext } from "../../graphql/context";

const apolloServer = new ApolloServer({
  context: createContext,
  schema,
});

const startServer = apolloServer.start();

export default async (req: any, res: any) => {
  if (req.method === "OPTIONS") {
    return false;
  }
  await startServer;

  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
};

// // Apollo Server Micro takes care of body parsing
export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};
