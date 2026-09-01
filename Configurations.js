import { createRequire } from "module";
const require = createRequire(import.meta.url);

global.mongodb = process.env.MONGO_URL || "mongodb+srv://camaravibescooll_db_user:Sekou123456@cluster0.ptfaaub.mongodb.net/atlas-md?retryWrites=true&w=majority";
global.sessionName = process.env.SESSION_ID || "SekouAtlas2026";

export default {
  mongodb: global.mongodb,
  sessionName: global.sessionName,
  PREFIX: "."
};
