import { API_KEY } from "@/constants/api";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IGetResponse } from "../Movies.types";

interface ParamsValue {
  type: "movie" | "tv";
  id: string | undefined;
}

export const useRecommendations = ({ type, id }: ParamsValue) =>
  useQuery({
    queryKey: ["recommend"],
    queryFn: async () => {
      const response = await axios.get<IGetResponse>(
        `https://api.themoviedb.org/3/${type}/${id}/recommendations?api_key=${API_KEY}`
      );
      return response.data.results;
    },
  });
