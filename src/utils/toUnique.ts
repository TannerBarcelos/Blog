import type { CollectionEntry } from 'astro:content'

export default function toUnique(
  data: CollectionEntry<any>[],
): CollectionEntry<any>[] {
  return [...new Set(data)]
}
