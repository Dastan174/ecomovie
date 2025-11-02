import { API_KEY } from "@/constants/api";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IActors } from "../Movies.types";

type ActorsParams = {
  type: "movie" | "tv";
  id: string | undefined;
};

export const useActors = ({ type, id }: ActorsParams) =>
  useQuery({
    queryKey: ["actors", id],
    queryFn: async () => {
      const response = await axios.get<IActors>(
        `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${API_KEY}`
      );
      return response.data.cast;
    },
  });
