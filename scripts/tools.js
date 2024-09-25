const token = process.env.EXPO_PUBLIC_TOKEN || "";

const url = "https://api.themoviedb.org/3/movie/popular?language=fr-FR";

const detail_url = "https://api.themoviedb.org/3/movie/1022789?language=en-US";

export { token, url };
