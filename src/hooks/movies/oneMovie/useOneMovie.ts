"use client";
import { API_KEY } from "@/constants/api";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { OneMovie } from "../Movies.types";

type OneMovieParams = {
  type: "movie" | "tv";
  id: any;
};

export const useOneMovie = ({ type, id }: OneMovieParams) =>
  useQuery({
    queryKey: ["one movie", id],
    queryFn: async () => {
      const response = await axios.get<OneMovie>(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}`
      );
      return response.data;
    },
  });
