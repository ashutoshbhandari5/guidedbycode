import { PlansRow, SubscriptionPlan } from "types";

export const pricingData: SubscriptionPlan[] = [
  {
    title: "Free Plan",
    description: "Start your journey with essential guidance and resources.",
    benefits: [
      "1 one-on-one call to discuss your goals and challenges",
      "Free resources tailored to your needs",
      "Weekly check-ins with assignments for 1 week",
      "Guidance to find the right learning path",
    ],
    limitations: [
      "Limited duration (1 week)",
      "No personalized long-term roadmap",
      "No portfolio or freelancing support",
    ],
    price: {
      isPaid: false,
      amount: 0,
    },
  },
  {
    title: "3-Month Plan",
    description: "Consistent mentorship and personalized guidance.",
    benefits: [
      "Personalized 3-month learning roadmap",
      "Weekly one-on-one calls and progress tracking",
      "Weekly assignments with detailed feedback",
      "Help overcoming procrastination and building discipline",
      "Basic freelancing guidance (profile setup, proposal tips)",
    ],
    limitations: [
      "Limited freelancing support for international clients",
      "No advanced portfolio or interview preparation",
    ],
    price: {
      isPaid: true,
      amount: 3000,
    },
  },
  {
    title: "7-Month Plan",
    description: "Deep dive into skill-building and job readiness.",
    benefits: [
      "Personalized 7-month learning roadmap",
      "Bi-weekly one-on-one calls for progress tracking",
      "Advanced assignments and feedback",
      "Comprehensive portfolio development for job applications",
      "Mock technical interviews for confidence building",
      "Freelancing preparation (client outreach, proposals, negotiation)",
    ],
    limitations: ["Limited real-time support outside scheduled calls"],
    price: {
      isPaid: true,
      amount: 5000,
    },
  },
  {
    title: "Custom Plan",
    description: "Fully tailored mentorship and advanced guidance.",
    benefits: [
      "Customizable learning roadmap based on your goals",
      "Frequent one-on-one calls and priority support",
      "Intensive freelancing guidance (international clients)",
      "Comprehensive portfolio creation and review",
      "Advanced technical coaching",
      "Interview preparation with tailored coaching",
      "Networking and career strategy for job applications",
    ],
    limitations: [],
    price: {
      isPaid: true,
      amount: null,
    },
  },
];

export const plansColumns = [
  "free",
  "3-month-plan",
  "7-month-plan",
  "custom-plan",
] as const;

export const comparePlans: PlansRow[] = [
  {
    feature: "One-on-One Calls",
    free: "1 call",
    "3-month-plan": "Weekly calls",
    "7-month-plan": "Bi-weekly calls",
    "custom-plan": "Frequent (as needed)",
    tooltip: "Personalized calls to track progress and solve challenges.",
  },
  {
    feature: "Personalized Roadmap",
    free: "Basic (1 week)",
    "3-month-plan": "3-month roadmap",
    "7-month-plan": "7-month roadmap",
    "custom-plan": "Fully tailored",
    tooltip: "Customized learning paths based on your goals and availability.",
  },
  {
    feature: "Assignments and Feedback",
    free: "Weekly assignments",
    "3-month-plan": "Weekly assignments with feedback",
    "7-month-plan": "Advanced assignments with feedback",
    "custom-plan": "Customized and intensive",
    tooltip: "Assignments to apply what you learn, with detailed feedback.",
  },
  {
    feature: "Overcoming Procrastination",
    free: "Basic tips",
    "3-month-plan": "Strategies for discipline",
    "7-month-plan": "Ongoing support",
    "custom-plan": "Advanced productivity coaching",
    tooltip: "Support to help you build habits and stay consistent.",
  },
  {
    feature: "Portfolio Building",
    free: null,
    "3-month-plan": "Basic portfolio guidance",
    "7-month-plan": "Detailed portfolio feedback",
    "custom-plan": "Comprehensive portfolio creation",
    tooltip: "Build and refine a portfolio to showcase your skills.",
  },
  {
    feature: "Freelancing Support",
    free: null,
    "3-month-plan": "Basic freelancing advice",
    "7-month-plan": "Freelancing preparation",
    "custom-plan": "Full support with international clients",
    tooltip: "Guidance to find freelance work and manage clients.",
  },
  {
    feature: "Interview Preparation",
    free: null,
    "3-month-plan": "Basic tips",
    "7-month-plan": "Mock interviews",
    "custom-plan": "Comprehensive interview coaching",
    tooltip: "Practice for technical interviews and improve your confidence.",
  },
  {
    feature: "Priority Support",
    free: null,
    "3-month-plan": null,
    "7-month-plan": null,
    "custom-plan": "High priority (24/7 support)",
    tooltip: "Quick responses to your questions and challenges.",
  },
];
