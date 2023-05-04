export interface SanityBody {
  _createAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

export interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface PageInfo extends SanityBody {
  _type: 'pageInfo';
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: Image;
  heroImageWidth: string;
  heroImageHeight: string;
  name: string;
  phoneNumber: string;
  profilePic: string;
}

export interface Technology extends SanityBody {
  _type: 'technology';
  image: Image;
  progress: Number;
  title: string;
  website: string;
  width: string;
  height: string;
}

export interface SkillType extends SanityBody {
  _type: 'skill';
  _id: string;
  image: Image;
  progress: number;
  title: string;
  website: string;
  width: string;
  height: string;
}

export interface Tag extends SanityBody {
  title: string;
  link?: string | null;
}

export interface Project extends SanityBody {
  title: string;
  _type: 'project';
  image: Image;
  linkToBuild: string;
  summary: string;
  technologies: Technology[];
}

export interface Experience extends SanityBody {
  title: string;
  _type: 'experience';
  linkToBuild: string;
  company: string;
  companyImage: Image | string;
  dateStarted: date;
  dateEnded?: date | null;
  isCurrentlyWorkingHere?: boolean;
  jobTitle: string;
  points: Point[] | Array;
  technologies: Technology[] | Array;
  _createAt?: date | string;
  _updatedAt?: date | string;
  _id: string;
  _rev?: string;
}

export interface Point extends SanityBody {
  point: string;
}

export interface Social extends SanityBody {
  _type: 'social';
  title: string;
  url: string;
}

// export interface SiteSettings extends SanityBody {
//   filter(arg0: (item: any) => boolean): boolean;
//   seo: SettingsSeo;
//   cookieConcentSettings: CookieConcentSettings[];

// }

export interface SettingsSeo extends SanityBody {
  favicon?: Image;
  siteTitle?: string;
  metaDescription?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: Image;
  gaTag?: string;
}

export interface CookieConcentSettings extends SanityBody {
  enableCookieConcent?: boolean | any;
  enableCookieConcentDebug?: boolean | any;
}

export type GaTag = {
  gaTag?: string;
};

export interface GoogleAnalytics4Settings extends SanityBody {
  recaptchaEnabled?: boolean;
  secretKey?: string;
  siteKey?: string;
}

export interface PostData {
  title: string;
  content: string;
  skills: SkillType[] | Technology[];
  category?: string;
  tags?: Tags[];
  imageSrc?: string;
  imageAlt?: string;
  postDate?: string;
  pageTitle?: string;
  metaDescription?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

export interface PostSettings {
  colors?: PostColors;
  favicon?: string;
}

export interface PostColors {
  actionColor: string;
  danger: string;
  primaryColor: string;
  secondaryColor: string;
  successColor: string;
  textColor: string;
}
