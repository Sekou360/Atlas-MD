import { createRequire } from "module";
const require = createRequire(import.meta.url);

global.mongodb = process.env.MONGO_URL || "mongodb+srv://camaravibescooll_db_user:Sekou123456@cluster0.ptfaaub.mongodb.net/atlas-md?retryWrites=true&w=majority";
global.sessionId = process.env.SESSION_ID || "SekouAtlas2026";
global.sessionName = global.sessionId;

export default {
  mongodb: global.mongodb,
  sessionId: global.sessionId,
  sessionName: global.sessionName,
  PREFIX: "."
};
