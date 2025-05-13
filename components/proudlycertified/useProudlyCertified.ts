// content file: useProudlyCertified.ts
"use client";

export const useProudlyCertified = () => {
    return {
      certifications: [
        { src: "/Images/100hours.png", alt: "RYS 100" },
        { src: "/Images/200hours.png", alt: "RYS 200" },
        { src: "/Images/300hours.png", alt: "RYS 300" },
        { src: "/Images/alliance.png", alt: "Yoga Alliance" },
      ],
      intro: {
        title: "Just like our name, we practice the old tradition of Yoga",
        description:
          "At Hrishikesh Yoga, authenticity isn’t just our philosophy—it’s our identity. Inspired by Rishikesh’s ancient name, Hrishikesh, we dedicate ourselves to preserving and teaching traditional yoga practices exactly as they were intended. Here, you’re not just a student—you’re family.",
        ctaText: "Learn more about our History",
      },
      stats: [
        { label: "The Hrishikesh was founded", value: "1950" },
        { label: "of our alumni are now teaching yoga professionally", value: "85%" },
        { label: "yoga classes have been conducted by our certified teachers, helping thousands of students", value: "10,000+" },
        { label: "students have launched their own yoga studios, online classes, or wellness businesses worldwide.", value: "500+" },
        { label: "Student satisfaction rate based on post-training feedback and reviews.", value: "95%" },
        { label: "countries are home to our graduates, spreading authentic yoga practices globally.", value: "30+" },
      ],
      whyChoose: {
        quote: {
          text: "Invoke the future, echo the past. Learn from the ancient wisdom within you.",
          subtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        },
        features: [
          {
            title: "Certified & Experienced Teachers",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
          },
          {
            title: "Globally Recognized Certification",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
          },
          {
            title: "Peaceful & Serene Location",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
          },
          {
            title: "Yoga Classes for All Levels",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
          },
        ],
      },
    };
  };