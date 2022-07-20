export type INavRefProps =  {
  width: number;
  theme: string;
  navRefs: navRefs;
  scrollIntoView: (targetRef: React.RefObject<HTMLElement>) => void;
}
export interface navRefs {
  aboutRef: React.RefObject<HTMLElement>;
  workRef: React.RefObject<HTMLElement>;
  experienceRef: React.RefObject<HTMLElement>;
  contactRef: React.RefObject<HTMLElement>;
}
