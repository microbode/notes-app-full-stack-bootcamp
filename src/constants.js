export const LOCAL_STORAGE_KEYS = {
  loggedUser: "loggedUser",
};

export const baseDomain =
  process.env.NODE_ENV === "production"
    ? "https://api-notes-david.herokuapp.com"
    : "http://localhost:3001";
