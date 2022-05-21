import { ApolloServer } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse, PageConfig } from "next";
import { schema } from "../../graphql/schema";
import { createContext } from "../../graphql/context";
import Cors from "micro-cors";

//cors
export function initMiddleWare(middleware: Function) {
  return (req: NextApiRequest, res: NextApiResponse) => {
    new Promise((resolve, reject) => {
      middleware(req, res, (result: any) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
  };
}

const cors = initMiddleWare(
  Cors({
    allowCredentials: true,
    //origin: "https://studio.apollographql.com",
  })
);

//apollo server config
const apolloServer = new ApolloServer({
  context: createContext,
  schema,
});

//create handler
const startServer = apolloServer.start();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://studio.apollographql.com"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  //await cors(req, res);
  await startServer;

  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
  return;
};

// // Apollo Server Micro takes care of body parsing
export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};
