// The table of contents for the labs
import Link from "next/link";

export default function TOC() {
  return (
    <div>
      <ul>
        <li><Link href="/labs" id="wd-lab1-link">Home</Link></li>
        <li><Link href="/labs/lab1" id="wd-toc-lab1-link">Lab 1</Link></li>
        <li><Link href="/labs/lab2" id="wd-toc-lab2-link">Lab 2</Link></li>
        <li><Link href="/labs/lab3" id="wd-toc-lab3-link">Lab 3</Link></li>
        <li><Link href="/labs/lab4" id="wd-toc-lab4-link">Lab 4</Link></li>
        <li><Link href="/labs/lab5" id="wd-toc-lab5-link">Lab 5</Link></li>
        <li>
          <a
            href="https://webdev-client.vercel.app/book/ch1"
            id="wd-toc-book-link"
            target="_blank"
            rel="noreferrer"
          >
            Chapter 1
          </a>
        </li>
        <li><Link href="/" id="wd-kambaz-link">Kambaz</Link></li>
      </ul>
      <p>Coco Choi - I write code on weekdays and I walk boarding dogs on weekends.</p>
    </div>
  );
}
