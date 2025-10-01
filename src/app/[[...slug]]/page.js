import { ClientOnly } from "./client"
import metadata from "./metadata.json"

// SEO metadata generate karne ka function
export async function generateMetadata({ params }) {
  const resolvedParams = await params         // ✅ await karo
  const slugArray = resolvedParams?.slug || [] 
  const slug = slugArray.join("/") || "home"  // default "home"

  const data = metadata[slug]

  if (!data) {
    return {
      title: "Page Not Found - Sevak Army",
      description: "The page you are looking for does not exist.",
      robots: "noindex, nofollow",
    }
  }

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    robots: data.robots,
    alternates: {
      canonical: data.canonical,
    },
    openGraph: data.openGraph,
    twitter: data.twitter,
  }
}

export function generateStaticParams() {
  return [{ slug: [] }] // home page ke liye
}

export default function Page() {
  return <ClientOnly />
}
