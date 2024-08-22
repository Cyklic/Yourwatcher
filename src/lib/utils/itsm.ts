import { z } from "zod";

export const newAssetSchema = z.object({
	name: z.string().min(1, "Name is Required"),
	stockId: z.string().min(1, "StockId is Required"),
	category: z.string().min(1, "Category is Required"),
	purchaseDate: z.date().nullable(),
	cost: z.number().nullable(),
	colour: z.string().min(1, "Colour is Required"),
	description: z.string().nullable(),
});

export type newAssetType = z.infer<typeof newAssetSchema>;
