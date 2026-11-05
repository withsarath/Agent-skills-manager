"use client";

import { useActionState } from "react";
import { createSkill } from "@/app/actions/skills";

const initialState = {
  message: "",
};

export default function NewSkillPage() {
  const [state, formAction, pending] = useActionState(
    createSkill,
    initialState,
  );

  return (
    <form action={formAction}>
      <input name="name" placeholder="Skill Name..." className="input input-bordered w-full" />
      <textarea
        name="description"
        placeholder="Skill Description..."
        rows={3}
        className="input input-bordered w-full"
      />
      <input name="category" placeholder="Skill category..." className="input input-bordered w-full" />

      <p aria-live="polite" className="text-red-500">
        {state?.message}
      </p>
      <button>{pending ? "Creating" : "Create Skill"}</button>
    </form>
  );
}
