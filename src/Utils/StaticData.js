import shstralogo from "../Assets/SHSTRAlogo.png";
import backgroundImage from "../Assets/Home_background.png";
import Tractor from "../Assets/Tractor.png"; 
import Card1 from "../Assets/card1.png";
import Card2 from "../Assets/card2_1.png";
import Card3 from "../Assets/card3_1.png";
import Card4 from "../Assets/card4_1.png";

export const headerData = {
  logo: shstralogo,
  navLinks: [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "PRODUCT", path: "/products" },
    { name: "CONTACT", path: "/contact" }
  ]
};

export const homeData = {
  sections: [
    { title: "Let's See", content: "" },
    { title: "Agriculture Mobility", content: "" },
    { title: "Our way", content: "" },
  ],
  backgroundImage: backgroundImage,
  productHighlight: {
    tag: "SHSTRA",
    title: "Sugarcane Harvester",
    description: "A revolutionary Smart Sugarcane Harvester designed to maximize efficiency, reduce labor costs, and increase crop yield through advanced automation and precision farming.",
    productfeatures: [
      "Automated harvesting technology",
      "GPS-guided precision farming",
      "Real-time crop monitoring"
    ],
    buttonText: "Learn More",
    imageDimensions: { width: 537, height: 442 },
    Tractor: Tractor,
}
};

export const featuresData = {
  title: "Features",
  features: [
    {
      text: "Automated reaping, detopping, and detrashing",
      image: Card1
    },
    {
      text: "Precise cutting & minimal stubble loss",
      image: Card2
    },
    {
      text: "Optimized size & mobility",
      image: Card3
    },
    {
      text: "Affordable operation & maintenance",
      image: Card4
    }
  ],
  containerStyles: {
    topHeight: '33.75rem',
    bottomHeight: '33.75rem',
    borderRadius: '4.8125rem'
  },
  cardStyles: {
    width: '15rem',
    borderRadius: '4.813rem',
    boxShadow: '0 4px 8px #17A24940'
  },
  imageStyles: {
    width: '8rem',
    height: '8rem'
  },
  textStyles: {
    fontSize: '1.5rem',
    color: '#2F3132',
    fontWeight: 400,
    lineHeight: 1.5
  }
};

export const heroBannerData = {
  subTitle: "We are Digitalizing Entire H&T Operations", 
  mainTitle: "HARVESTING FLEET AT <span>FEET</span>",
  buttonText: "Discover More",
}

// staticData.js
export const contactData = {
  title: "Get In Touch",
  companyName: "Shastratva Technologies",
  description: "Let's start a conversation about your agricultural needs! Our team is ready to provide personalized solutions and support for your farming challenges.",
  contactInfo: [
    {
      icon: "phone",
      text: "+91 1234567890"
    },
    {
      icon: "email",
      text: "support@shshtra.com"
    },
    {
      icon: "location",
      text: "Pune, Maharashtra, India"
    }
  ],
  formFields: {
    name: {
      label: "Name",
      width: "17.438rem",
      height: "5.5rem"
    },
    email: {
      label: "Email",
      width: "17.438rem",
      height: "5.5rem"
    },
    message: {
      label: "Message",
      width: "36.688rem",
      height: "12.5rem",
      rows: 4
    },
    button: {
      text: "Send Message",
      width: "18.813rem",
      height: "4.375rem"
    }
  }
};

export const LatestVideosData = {
  title: "Latest @SHSTRA",
LatestVideoslinks: [
  {
    text: "Latest Video 1",
    image: "https://via.placeholder.com/150"
  },
  {
    text: "Latest Video 2",
    image: "https://via.placeholder.com/150"
  },
  {
    text: "Latest Video 3",
    image: "https://via.placeholder.com/150"
  },
]
}


export const footerData = {
  companyInfo: {
    logo: shstralogo,
    description: 'Transforming agriculture through innovative technology solutions for a sustainable future.',
    socialLinks: [
      { icon: 'facebook', url: '#' },
      { icon: 'twitter', url: '#' },
      { icon: 'linkedin', url: '#' },
      { icon: 'instagram', url: '#' }
    ]
  },
  quickLinks: [
    { title: 'Home', url: '#' },
    { title: 'About Us', url: '#' },
    { title: 'Services', url: '#' },
    { title: 'Products', url: '#' },
    { title: 'Contact', url: '#' }
  ],
  contactInfo: [
    { icon: '📍', text: '123 Farm Street, Pune, Maharashtra, India' },
    { icon: '📞', text: '+91 1234567890' },
    { icon: '✉️', text: 'info@shastratva.com' }
  ],
  legalLinks: [
    { title: 'Privacy Policy', url: '#' },
    { title: 'Terms of Service', url: '#' },
    { title: 'Sitemap', url: '#' }
  ],
  copyright: `© ${new Date().getFullYear()} Shastratva Technologies. All Rights Reserved.`
};
