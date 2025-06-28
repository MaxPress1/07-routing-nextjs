import NotesClient from "./Notes.client";
import { fetchNotes } from "@/lib/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

type NotesProps = {
  params: Promise<{ slug: string[] }>;
};

export default async function Notes({ params }: NotesProps) {
  const { slug } = await params;
  const queryClient = new QueryClient();
  const tag = slug[0] === "All" ? "" : slug[0];
  const res = await fetchNotes({ page: 1, search: "", tag });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient initialData={res} tag={tag} />
    </HydrationBoundary>
  );
}
