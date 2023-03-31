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

export interface Skill extends SanityBody {
  _type: 'skill';
  _id: string;
  image: Image;
  progress: number;
  title: string;
  website: string;
  width: string;
  height: string;
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
  companyImage: Image;
  dateStarted: date;
  dateEnded: date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: Point[];
  technologies: Technology[];
}

export interface Point extends SanityBody {
  point: string;
}

export interface Social extends SanityBody {
  _type: 'social';
  title: string;
  url: string;
}
