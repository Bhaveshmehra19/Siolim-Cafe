import type { Metadata } from "next";
export const metadata:Metadata={title:"Gallery",description:"A visual journal of the interiors, food, coffee and desserts at Siolim Café in Indore.",alternates:{canonical:"/gallery"}};
export default function GalleryLayout({children}:{children:React.ReactNode}){return children;}
