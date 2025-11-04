import { API_KEY } from "@/constants/api";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IGetResponse, ITrendMovie } from "../Movies.types";

interface ParamsValue {
  type: "movie" | "tv";
  id: undefined | string;
}

export const useSimilar = ({ type, id }: ParamsValue) =>
  useQuery({
    queryKey: ["similar"],
    queryFn: async () => {
      const response = await axios.get<IGetResponse>(
        `https://api.themoviedb.org/3/${type}/${id}/similar?api_key=${API_KEY}`
      );
      return response.data.results;
    },
  });
