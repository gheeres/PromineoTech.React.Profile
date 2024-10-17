import type { SocialMedia } from "../types";

type SocialMediaProps = {
  socialMedia?: SocialMedia,
};

export default function SocialMedia({ socialMedia, ...props }: SocialMediaProps) {
  let buttons = [];  
  for(const name in socialMedia) {
    buttons.push(<button key={ name } type="button" className="btn btn-outline-primary btn-floating">
                   <i className={ `bi bi-${ name }` }></i>
                 </button>);
  }

  return (
    <div className="mb-4 pb-2">
      { buttons }
    </div>
  );
}