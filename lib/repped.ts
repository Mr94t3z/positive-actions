import redis from "./redis.js";

export async function repped(fid: number, username: string) {
  const id = fid.toString();
  await redis.zincrby("score", 1, id);
  await redis.hset("usernames", id, username);
}