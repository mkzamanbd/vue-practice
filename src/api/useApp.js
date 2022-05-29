import useAxios from "@/plugins/useAxios";

export const InitApp = () => useAxios.get("/init-app");
