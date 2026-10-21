export const pricingCards = [
  {
    title: "Standard",
    description: "Perfect for trying out Kaia",
    price: "$0",
    duration: "",
    highlight: "Key features",
    features: [" 1 domain ", "10 contacts", "10 Emails per month"],
    priceId: "",
  },
  {
    title: "Ultimate",
    description: "The ultimate agency kit",
    price: "$97",
    duration: "month",
    highlight: "Key features",
    features: [" Unlimited domain ", "500 Contacts", "500 Emails"],
    priceId: process.env.NEXT_PUBLIC_STRIPE_ULTIMATE_PLAN_PRICE_ID ?? "",
  },
  {
    title: "Plus",
    description: "For serious agency owners",
    price: "$67",
    duration: "month",
    highlight: "Everything in Starter, plus",
    features: [" 2 domain ", "50 contacts", "50 Emails per month"],
    priceId: process.env.NEXT_PUBLIC_STRIPE_PLUS_PLAN_PRICE_ID ?? "",
  },
];
