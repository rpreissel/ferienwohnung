import { defineCollection, z } from "astro:content";

const apartmentCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    eyebrow: z.string(),
    subtitle: z.string(),
    seoTitle: z.string(),
    seoDescription: z.string(),
    email: z.string(),
    registrationNumber: z.string(),
    pricing: z.object({
      perNight: z.number(),
      cleaning: z.number(),
      cancellation: z.string(),
    }),
    stats: z.array(z.object({ value: z.string(), label: z.string() })),
    highlights: z.array(
      z.object({ title: z.string(), text: z.string(), icon: z.string() })
    ),
    description: z.object({
      heading: z.string(),
      paragraphs: z.array(z.string()),
      note: z.string(),
    }),
    amenities: z.array(
      z.object({ title: z.string(), text: z.string(), icon: z.string() })
    ),
    location: z.object({
      heading: z.string(),
      text: z.string(),
      checklist: z.array(z.string()),
    }),
    contact: z.object({
      heading: z.string(),
      text: z.string(),
      airbnbUrl: z.string().url(),
    }),
  }),
});

export const collections = {
  apartment: apartmentCollection,
};
