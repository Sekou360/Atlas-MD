import { createRequire } from "module";
const require = createRequire(import.meta.url);

// MongoDB et Session
global.mongodb = process.env.MONGO_URL || "mongodb+srv://camaravibescooll_db_user:Sekou123456@cluster0.ptfaaub.mongodb.net/atlas-md?retryWrites=true&w=majority";
global.sessionId = process.env.SESSION_ID || "SekouAtlas2026";
global.sessionName = global.sessionId;

// Propriétaire et Modérateurs (Format Tableaux requis pour éviter .length)
const rawOwner = process.env.OWNER_NUMBER || "224622187943";
global.owner = Array.isArray(rawOwner) ? rawOwner : rawOwner.split(",").map(num => num.trim());
global.mods = [];
global.premium = [];
global.sudo = [];

// Clés API, préfixes et listes annexes
global.openaiAPIKeys = [];
global.claudeAPIKeys = [];
global.tenorAPIKeys = [];
global.tenorApiKey = "";
global.packname = "Atlas-MD";
global.author = "Sekou360";

export default {
  mongodb: global.mongodb,
  sessionId: global.sessionId,
  sessionName: global.sessionName,
  owner: global.owner,
  mods: global.mods,
  premium: global.premium,
  sudo: global.sudo,
  openaiAPIKeys: global.openaiAPIKeys,
  claudeAPIKeys: global.claudeAPIKeys,
  tenorAPIKeys: global.tenorAPIKeys,
  PREFIX: "."
};
