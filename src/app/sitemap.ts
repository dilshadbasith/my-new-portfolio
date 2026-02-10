// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://dilshadbasith.vercel.app/",
            lastModified: new Date(),
            priority: 1,
        },
    ];
}
