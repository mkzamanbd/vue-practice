import useAxios from "@/plugins/useAxios";

export const currentUser = () => useAxios.get("/auth/current-user");
export const logout = () => useAxios.get("/auth/logout");
