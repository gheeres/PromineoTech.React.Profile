export type SocialMedia = { 
  facebook?: string, 
  twitter?: string, 
  skype?: string 
};
export type User = {
  id: number, 
  lastName: string, 
  firstName: string,
  title?: string,
  email: string,
  photo: string,
  socialMedia?: SocialMedia
  followers?: string[]
};