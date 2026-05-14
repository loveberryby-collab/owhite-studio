import { getAllContent } from "./content";
import { defaultContent } from "./default-content";

export type SiteContent = Record<string, Record<string, unknown>>;

export async function getSiteContent(): Promise<SiteContent> {
  try {
    const db = await getAllContent();
    const merged: SiteContent = {};

    for (const key of Object.keys(defaultContent)) {
      merged[key] = (db[key] as Record<string, unknown>) ||
        (defaultContent[key] as Record<string, unknown>);
    }

    return merged;
  } catch {
    return defaultContent as SiteContent;
  }
}
