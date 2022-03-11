import { useSiteMetadata } from '../hooks/useSiteMetadata';

export const IndexPage = () => {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  );
};

export default IndexPage;
