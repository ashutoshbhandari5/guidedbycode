import { ContentCard, TestimonialType, TimelineItem } from "types";

export const testimonials: TestimonialType[] = [
  {
    name: "Salah Dine",
    job: "Student learning data science",
    image: "/_static/testimonials/salah.jpg",
    review:
      "We had a time difference and I remember he use to come with those red eyes and still reviewd all of my assignments and with all those tired face he still had energy to be strict on me, haha I remember once I was saying sorry and you were scolding like sorry won't help but it was worth it.",
  },
  {
    name: "Abhishekh Chand",
    job: "React Developer",
    image: "/_static/testimonials/abhishek.jpg",
    review:
      "I was new in freelancing and we worked on a same project of one client. I was beginner there but he helped me understood the project then guided me for more than 3 months which gave a huge confident in React and Spring boot.",
  },
  {
    name: "Aavash Niroula",
    job: "Student learning code",
    image: "/_static/testimonials/aavash.jpg",
    review:
      "Ashutosh is my brother, he mentored me for long period of time and I just bought a laptop to learn coding. Now he guides me everyday. I'm 17 and I already feel confident about programming. Hoping for more lessons in the future. Once he asked me to work on his office code and it was a good experience, hope we do that often😜",
  },
  {
    name: "Sandeep Bhattarai",
    job: "Full stack developer",
    image: "/_static/testimonials/sandeep.jpg",
    review:
      "Thanks my friend for your valuable lessons. I understood importance of fundamental instead of jumping back and forth between the different frameworks. He told me to stay focus on one tech at a time and created a schedule for everyday, I just followed that schedule and then it was kind of habit.",
  },
  {
    name: "Εugen Pitt",
    job: "Next JS developer",
    image: "/_static/testimonials/eugen.jpg",
    review:
      "I posted a job at upwork for my assignment where I was really stuck. Ashutosh hit me with the proposal and solved my issue then he told me he can guide me until I get confident with coding so we started meeting on zoom for like 5, 6 months and it was really good. Thank you for guiding me and best of luck!",
  },
  {
    name: "Abel Tsegaye",
    job: "Node Js student",
    image: "/_static/testimonials/abel.jpg",
    review:
      "Even though I was really bad at english he made sure I understood everything during our coaching session, he planned me a study timing and provided the right resouces. I use to ask like 1000 of questions but he would answer with care. Thanks man it really helped me.",
  },
  {
    name: "Raavi Thind",
    job: "Spring boot Intern",
    image: "/_static/testimonials/raavi.jpg",
    review:
      "I met Ashutosh in Facebook group where I was stuck and asking for help. We ended up having a Zoom call, and he explained things in such a simple way, especially about procrastination and imposter syndrome. I used to feel so anxious about whether I was even good enough at coding. But he guided me every day, which helped me build better habits. Honestly, he was kinda strict at first, and I was like, 'Does he need to be this serious?' But it really helped me improve bit by bit.",
  },
];

export const contentCards: ContentCard[] = [
  {
    title: "I’ll guide you with the right resources and a plan that fits you.",
    content:
      "I know how frustrating it is to waste time on things that don’t help. That’s why I’ll give you a clear, personalized plan and the right resources to follow. No unnecessary steps, no extra noise—just a path that’s built for you and your goals.",
    bullets: [
      "A plan tailored to you.",
      "Resources for your learning style.",
      "Focus on learning, not searching.",
      "Clear milestones for progress.",
    ],
    icon: "book", // Icon for the first card
  },
  {
    title: "I’ll help you through the hard days and keep you moving forward.",
    content:
      "Some days, coding will feel frustrating. You’ll doubt yourself or feel like giving up. That’s okay it happens to everyone. But I’ll be there to guide you, remind you of your progress, and help you push through, no matter how hard it gets.",
    bullets: [
      "Support when you're stuck.",
      "Build habits for daily progress.",
      "Overcome procrastination and burnout.",
      "Honest advice for imposter syndrome.",
    ],
    icon: "heart", // Icon for the second card
  },
  {
    title: "I’ll guide you to prepare for your first job in tech.",
    content:
      "Getting your first job in tech takes effort, and I’m here to help you focus on the right things. I’ll guide you in building a strong portfolio, preparing for interviews, and understanding what recruiters are looking for.",
    bullets: [
      "Build a standout portfolio.",
      "Prepare for technical interviews.",
      "Create a strong resume and LinkedIn.",
      "Learn what recruiters want.",
    ],
    icon: "briefcase", // Icon for the third card
  },
];

export const timelineData: TimelineItem[] = [
  {
    title: "Your Journey Starts Here",
    description: "Let’s take the first step together.",
    points: [
      "We’ll have a one-on-one call to talk about your goals and challenges.",
      "Together, we’ll decide what’s most important and where to start.",
      "I’ll help you pick the best tools and skills for your journey.",
      "You’ll get a step-by-step plan made just for you.",
      "I’ll share everything you need to stay focused and motivated.",
    ],
    images: [
      { src: "/_static/blog/one.jpg", alt: "goal-setting session" },
      { src: "/_static/blog/brainstorming.jpg", alt: "brainstorming ideas" },
      { src: "/_static/blog/roadmap.jpg", alt: "roadmap planning" },
      { src: "/_static/blog/happy.jpg", alt: "achieving milestones" },
    ],
  },
  {
    title: "Progress and Support",
    description: "Keep moving forward with my help.",
    points: [
      "I’ll check in with you regularly to see how you’re doing.",
      "You’ll get feedback on your homework and projects to help you improve.",
      "We’ll work together to solve any problems and stay consistent.",
      "If needed, we’ll adjust the plan to match your progress and goals.",
    ],
    images: [
      { src: "/_static/blog/tutoring.jpg", alt: "startup template" },
      { src: "/_static/blog/learning.jpg", alt: "learning progress" },
      { src: "/_static/blog/taskPlanning.jpg", alt: "task planning" },
      { src: "/_static/blog/planning.jpg", alt: "planning session" },
    ],
  },
  {
    title: "Get Job-Ready",
    description:
      "Prepare yourself to step into the job market with confidence.",
    points: [
      "Build a professional portfolio that highlights your real-world projects and skills.",
      "Learn how to create an impressive resume and LinkedIn profile that stand out.",
      "Practice for interviews with mock sessions to gain confidence and improve performance.",
      "Gain insights into applying for jobs effectively and connecting with recruiters.",
      "Stay focused and motivated as you take these crucial steps toward your career.",
    ],
    images: [
      { src: "/_static/blog/practicing.jpg", alt: "Building portfolio" },
      { src: "/_static/blog/workingTask.jpg", alt: "Interview preparation" },
      { src: "/_static/blog/focused.jpg", alt: "Connecting with recruiters" },
      { src: "/_static/blog/success.jpg", alt: "Achieving goals" },
    ],
  },
];
