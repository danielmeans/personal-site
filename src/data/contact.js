import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/danielmeans',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.linkedin.com/in/daniel-means-38a16a4b',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://twitter.com/DanielRMeans',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: 'mailto:daniel.r.means@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
