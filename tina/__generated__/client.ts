import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '35538b0f7a96830534e5f03f95eaeaa932d4823a', queries,  });
export default client;
  