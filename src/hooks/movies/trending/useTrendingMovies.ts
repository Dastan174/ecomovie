"use client";
import { API_KEY } from "@/constants/api";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IGetResponse } from "../Movies.types";

type ToggleTrend = "day" | "week";

export const useTrending = (toggle: ToggleTrend = "day") =>
  useQuery({
    queryKey: ["trending"],
    queryFn: async () => {
      const response = await axios.get<IGetResponse>(
        `https://api.themoviedb.org/3/trending/movie/${toggle}?api_key=${API_KEY}`
      );
      return response.data.results;
    },
  });
