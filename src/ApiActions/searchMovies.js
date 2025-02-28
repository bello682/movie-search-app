import axios from "axios";
import { message } from "antd";

const BASE_URL = import.meta.env.VITE_API_URL;

export const searchMovies = async (title) => {
	try {
		const response = await axios.get(`${BASE_URL}&s=${title}`);
		return response.data.Search || []; 
	} catch (error) {
		message.error("Failed to fetch movies. Please try again.");
		console.error("Error fetching movies:", error);
		return [];
	}
};
