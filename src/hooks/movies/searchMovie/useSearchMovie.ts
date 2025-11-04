import { API_KEY } from "@/constants/api";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IGetResponse } from "../Movies.types";

interface ParamsValue {
  type: "movie" | "tv";
  query: string;
}

export const useSearchMovie = ({ type, query }: ParamsValue) =>
  useQuery({
    queryKey: ["search"],
    queryFn: async () => {
      const response = await axios.get<IGetResponse>(
        `https://api.themoviedb.org/3/search/${type}?query=${query}&api_key=${API_KEY}`
      );
      console.log(response.data.results);

      return response.data.results;
    },
  });
