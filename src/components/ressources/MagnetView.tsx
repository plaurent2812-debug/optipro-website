import { parseInline, type Magnet, type MagnetBlock } from '@/lib/magnets';
import styles from './MagnetView.module.css';

interface Props {
  magnet: Magnet;
}

function renderInline(text: string) {
  const segments = parseInline(text);
  return segments.map((seg, i) => {
    switch (seg.type) {
      case 'bold':
        return <strong key={i}>{seg.value}</strong>;
      case 'italic':
        return <em key={i}>{seg.value}</em>;
      case 'code':
        return <code key={i}>{seg.value}</code>;
      case 'link':
        return (
          <a key={i} href={seg.href}>
            {seg.value}
          </a>
        );
      default:
        return <span key={i}>{seg.value}</span>;
    }
  });
}

function renderBlock(block: MagnetBlock, key: number) {
  switch (block.type) {
    case 'paragraph':
      return <p key={key}>{renderInline(block.text)}</p>;
    case 'list':
      return (
        <ul key={key}>
          {block.items.map((item, i) => (
            <li key={i}>{renderInline(item)}</li>
          ))}
        </ul>
      );
    case 'code':
      return (
        <pre key={key}>
          <code>{block.content}</code>
        </pre>
      );
    case 'separator':
      return <hr key={key} />;
    default:
      return null;
  }
}

export default function MagnetView({ magnet }: Props) {
  return (
    <article className={styles.article}>
      {magnet.subtitle && <p className={styles.subtitle}>{magnet.subtitle}</p>}
      {magnet.sections.map((section, i) => (
        <section key={i}>
          {section.level === 2 ? (
            <h2>{section.title}</h2>
          ) : (
            <h3>{section.title}</h3>
          )}
          {section.blocks.map((block, j) => renderBlock(block, j))}
        </section>
      ))}
    </article>
  );
}
