export const SITE_NAME: string = "Evently";

export type HeaderLink = {
  label: string;
  route: string;
};

export const headerLinks: HeaderLink[] = [
  { label: "Home", route: "/" },
  { label: "Create Event", route: "/events/create" },
  { label: "My Profile", route: "/profile" },
];

export const eventDefaultValues = {
  title: "",
  description: "",
  location: "",
  imageUrl: "",
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: "",
  price: "",
  isFree: false,
  url: "",
};
