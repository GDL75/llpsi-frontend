import Link from "next/link";

export default function SidebarLeft() {
  const chapters = Array.from({ length: 50 }, (_, i) => i + 1);

  return (
    <aside>
      <ul>
        {chapters.map((num) => (
          <li key={num}>
            {/* <Link href={`/chapter/${num}/text`}>Chapitre {num}</Link> */}
          </li>
        ))}
      </ul>
    </aside>
  );
}
