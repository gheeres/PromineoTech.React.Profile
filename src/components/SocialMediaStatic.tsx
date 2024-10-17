import { SocialMedia } from "../types";

type SocialMediaStaticProps = {
  socialMedia: SocialMedia,
};

export default function SocialMediaStatic({ socialMedia, ...props} : SocialMediaStaticProps) {
  return (
    <div className="mb-4 pb-2">
      { socialMedia.facebook    // (condition) ? true : false
        ? <button type="button" className="btn btn-outline-primary btn-floating">
            <i className="bi bi-facebook"></i>
          </button>
        : ''
      }
      { socialMedia.twitter
        ? <button type="button" className="btn btn-outline-primary btn-floating">
            <i className="bi bi-twitter"></i>
          </button> 
        : ''
      }
      { socialMedia.skype 
        ? <button type="button" className="btn btn-outline-primary btn-floating">
            <i className="bi bi-skype"></i>
          </button>
        : ''
      }
    </div>
  );
}