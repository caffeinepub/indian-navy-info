import { useQuery } from "@tanstack/react-query";
import type { Career, NewsArticle, Ship } from "../backend.d";
import { useActor } from "./useActor";

export function useGetAllShips() {
  const { actor, isFetching } = useActor();
  return useQuery<Ship[]>({
    queryKey: ["ships"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllShips();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAllNews() {
  const { actor, isFetching } = useActor();
  return useQuery<NewsArticle[]>({
    queryKey: ["news"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllNews();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAllCareers() {
  const { actor, isFetching } = useActor();
  return useQuery<Career[]>({
    queryKey: ["careers"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllCareers();
    },
    enabled: !!actor && !isFetching,
  });
}
