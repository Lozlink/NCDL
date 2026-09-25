/**
 * Single source of truth for firm contact details.
 *
 * NOTE: the Framer build displays 0481 251 455 / info@ncdl.com.au but its
 * links point at template placeholders (tel:+61290000000,
 * mailto:enquiries@norusco.com.au). Links here use the *displayed* values.
 * Confirm with the client before go-live.
 */
export const site = {
  name: "Norus Criminal Defence Lawyers",
  title: "Norus & Co Criminal Defence Lawyers",
  description:
    "Boutique criminal defence and traffic law representation across Sydney and NSW.",
  principal: "Shantel Norus",
  phoneDisplay: "0481 251 455",
  phoneHref: "tel:+61481251455",
  email: "info@ncdl.com.au",
  address: "Level 13, 111 Elizabeth Street, Sydney NSW 2000",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Level+13%2C+111+Elizabeth+Street%2C+Sydney+NSW+2000",
} as const;

export const anchors = {
  practiceAreas: "practice-areas",
  principal: "principal",
  enquiry: "enquiry",
} as const;
