"use client";
import Modal from "@/components/Modal/Modal";
import NotePreview from "@/components/NotePreview/NotePreview";
import { useParams, useRouter } from "next/navigation";
import { useCallback } from "react";

export default function NotePreviewClient() {
  const { id } = useParams<{ id: string }>();

  const newId = Number(id);

  const router = useRouter();

  const onClose = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <Modal onClose={onClose}>
      <NotePreview id={newId} />
    </Modal>
  );
}
