"use client";

import { useParams } from "next/navigation";
import { SKILLS } from "../SKILLS";
import { useEffect, useState } from "react";
import type { Skill } from "../SKILLS";
export default function SkillsDetailPage() {
  // Instead of using async await promise(which is used in server components) we can use react build in hook called useParams
  const params = useParams<{ id: string }>();
  const [skills, setSkills] = useState(SKILLS);
  const [skill, setSkill] = useState<Skill | null>(null);

  useEffect(() => {
    const skill = skills.find((skill) => skill.id === params.id);
    if (skill) {
      setSkill(skill);
    }
  }, [params.id]);

  return skill ? (
    <article>
      <h1>{skill?.name}</h1>
      <p>{skill?.description}</p>
      <p>{skill?.category}</p>
      <p>{skill?.createdAt}</p>
      <p>{skill?.updatedAt}</p>
    </article>
  ) : (
    <div>Skills not found</div>
  );
}
