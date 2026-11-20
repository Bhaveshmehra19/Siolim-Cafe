import type { MetadataRoute } from "next"; import { site } from "@/lib/site";
export default function sitemap():MetadataRoute.Sitemap{return ["","/menu","/gallery","/reservations","/contact"].map(path=>({url:`${site.url}${path}`,lastModified:new Date(),changeFrequency:path===""?"weekly":"monthly",priority:path===""?1:.7}));}
