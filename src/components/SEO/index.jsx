import { Helmet } from "react-helmet";

const DEFAULT_SEO_CONFIG = {
  title: "tabletap.",
  description:
    "Make managing your restaurant's menu a breeze! Let customers scan a QR code at their table to check out your menu and order in no time. Keep track of everything with a real-time dashboard and streamline your restaurant's operations. Perfect for modern restaurants looking to level up their service.",
  icon: "/images/svg/512-logo.png",
  keywords: [
    "easy menu creator",
    "QR code menu app",
    "restaurant ordering system",
    "order from table",
    "digital restaurant menu",
    "table QR code ordering",
    "restaurant dashboard",
    "track orders in real-time",
    "group ordering for restaurants",
    "restaurant staff management",
    "streamline restaurant orders",
    "digital food ordering",
  ],
};

export default function DefaultHeadSEO(props) {
  const prop = { ...DEFAULT_SEO_CONFIG, ...props };

  return (
    <Helmet>
      <title>{prop.title}</title>
      <meta name="title" content={prop.title} />
      <meta name="description" content={prop.description} />
      <meta name="keywords" content={prop.keywords.join(",")} />
      <link rel="icon" href={prop.icon} />
    </Helmet>
  );
}
