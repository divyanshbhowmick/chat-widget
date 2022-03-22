const avatarObjMe = { src: "", name: "Divyansh Bhowmick" };
const avatarObjBot = { src: "", name: "Other Person" };

export const USERS = {
    ME: "ME",
    BOT: "BOT"
}

export const AVATAR = {
    [USERS.ME]: avatarObjMe,
    [USERS.BOT]: avatarObjBot
}

export const DEFAULT_MESSAGES = localStorage.getItem('chatMessages') ? JSON.parse(localStorage.getItem('chatMessages')) : [];