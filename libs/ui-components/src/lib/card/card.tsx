import { BsArrowRight } from 'react-icons/bs';

export interface CardProps {
  href: string;
  heading: string;
  copy: string;
  imgSrc: string;
  imgAlt: string;
}

export function Card({ href, heading, copy, imgSrc, imgAlt }: CardProps) {
  return (
    <div className="overflow-hidden rounded-lg shadow-xl card bg-base-100">
      <figure>
        <img src={imgSrc} alt={imgAlt} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{heading}</h2>
        <p className="line-clamp-3">{copy}</p>
        <div className="justify-center mt-4 card-actions">
          <a className="flex-1 btn btn-primary" href={href}>
            Read More <BsArrowRight className="ml-3" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
