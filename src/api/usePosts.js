import useAxios from "@/plugins/useAxios";

export const getAllPosts = () => useAxios.get("/posts");
