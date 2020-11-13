const actorProfile = {
  actorFirstName: `Carly`,
  actorLastName: `Fawcett`,
  actorFullName: `Carly Fawcett`,
  actorEmail: `carly.j.fawcett@gmail.com`,
  actorLink: `http://www.carlyfawcett.com`,
  actorPhone: ``,
  actorResume: `../carly_fawcett_resume.pdf`,
  actorFacebookLink: `https://www.facebook.com/carly.j.fawcett`,
  actorInstagramLink: `http://instagram.com/carlyjfawcett`,
  actorLinkedInlink: `http://linkedIn.com`,
  actorImdbLink: `https://www.imdb.com/name/nm7681807/?ref_=fn_al_nm_1`,
  actorYoutubeLink: `https://www.youtube.com/channel/UCco0RtAkWo2ERCj6YckbeMg`,
  actorTwitterLink: `http://www.twitter.com`,
  actorAbout: `Carly Fawcett is a Vancouver born actress, raised in Kelowna, B.C.
          Since she discovered her dad’s Hitachi Video camera at age 3, she has
          always had a love for being in front, and behind the camera. Carly has
          preformed on stages in Kelowna, Vancouver, New York City and Toronto.
          Current projects include The Color Rose, and self-written one woman
          show set to debut in 2020.`,
  featuredType: `One Woman Show`,
  featuredTitle: `Starfucker`,
  featuredDescription: `Carly is currently working her one woman show. It has been performed at Toront's Scripted Festival in 2019 and is still in development. `,
};

const {
  actorFirstName,
  actorLastName,
  actorFullName,
  actorEmail,
  actorLink,
  actorPhone,
  actorResume,
  actorFacebookLink,
  actorInstagramLink,
  actorLinkedInlink,
  actorImdbLink,
  actorYoutubeLink,
  actorTwitterLink,
  actorAbout,
  featuredType,
  featuredTitle,
  featuredDescription,
} = actorProfile;

export const pageNavbar = {
  navMenuItems: {
    home: `Home`,
    about: `About ${actorFirstName}`,
    reel: `Reel`,
    featuredNews: featuredType,
    resume: `Resume`,
    contact: `Contact`,
  },
  logoText: actorFullName,
  logoAltText: actorFullName,
  logoTextLink: actorLink,
};

export const headerPage = {
  actorFirstName,
  actorLastName,
};

export const aboutPage = {
  aboutText: actorAbout,
  aboutTitle: `About ${actorFullName}`,
};

export const contactPage = {
  contactTitle: `Contact ${actorFirstName}`,
  agencyInfo: {
    agencyTitle: `Representation`,
    agencyName: `The Meus Talent Agency`,
    agencyEmail: `lisameuser@themuseproductions.ca`,
    agencyPhone: `613-853-1559`,
  },
  actorInfo: {
    actorTitle: `Info`,
    actorFirstName: actorFirstName,
    actorLastName: actorLastName,
    actorFullName: actorFullName,
    actorEmail: actorEmail,
    actorPhone: actorPhone,
  },
  contactFooterMenu: {
    menuTitle: `Menu`,
    menuItems: {
      home: { name: `Home`, link: `home` },
      about: { name: `About`, link: `about` },
      reels: { name: `Reels`, link: `reels` },
      featuredNews: { name: `One Woman Show`, link: `featuredNews` },
      resume: { name: `Resume`, link: `resume` },
    },
    socialLinks: {
      facebook: actorFacebookLink,
      instagram: actorInstagramLink,
      imdb: actorImdbLink,
      linkedin: actorLinkedInlink,
      youtube: actorYoutubeLink,
      twitter: actorTwitterLink,
    },
    copyrightInfo: {
      copyrightTitle: `Copyright`,
      copyrightText: `All Rights Reserved by ${actorFullName}.`,
    },
  },
};

export const reelsPage = {
  comedyReel: {
    reelTitle: `Comedy Reel`,
    reelLink: `https://www.youtube.com/watch?v=en_FeSi69IY&feature=youtu.be`,
  },
  dramaticReel: {
    reelTitle: `Dramatic Reel`,
    reelLink: `https://www.youtube.com/watch?v=z2DOWEQzbAM`,
  },
};

export const resumePage = {
  resumeTitle: `Download Resume`,
  resumeLink: actorResume,
};

export const featured = {
  featuredTitle: `${featuredTitle}, ${featuredType}`,
  featuredText: featuredDescription,
};
