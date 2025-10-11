import { ModelDirectoryBoard } from "@/components/models/model-directory-board";
import { fetchModelDirectory } from "@/lib/api";

export default async function ModelsPage() {
  const models = await fetchModelDirectory(1800);
  return <ModelDirectoryBoard models={models} />;
}
