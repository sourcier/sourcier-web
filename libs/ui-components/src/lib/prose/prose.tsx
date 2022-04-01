export interface ProseProps {
  children: React.ReactNode;
}

export function Prose({ children }: ProseProps) {
  return (
    <div className="my-8 prose prose-lg max-w-none dark:prose-invert prose-img:rounded-lg prose-a:link-primary dark:prose-a:link-accent prose-headings:capitalize">
      {children}
    </div>
  );
}

export default Prose;
