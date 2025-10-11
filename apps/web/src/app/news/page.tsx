import { NewsroomFeed } from "@/components/news/newsroom-feed";
import { fetchNewsPayload } from "@/lib/api";

export const dynamic = "force-dynamic";

export default async function NewsPage() {
  const payload = await fetchNewsPayload(30);
  return <NewsroomFeed initial={payload} />;
}
