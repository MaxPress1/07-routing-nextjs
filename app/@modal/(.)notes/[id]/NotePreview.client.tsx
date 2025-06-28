"use client";
import Modal from "@/components/Modal/Modal";
import NotePreview from "@/components/NotePreview/NotePreview";
import { useParams } from "next/navigation";

export default function NotePreviewClient() {
  const { id } = useParams<{ id: string }>();

  return (
    <Modal>
      <NotePreview id={id} />
    </Modal>
  );
}
