// .fromTo(
//     section,
//     {
//       backgroundColor: images[index - 1]?.bg ?? "#fff",
//       clipPath: "circle(0%)",
//     },
//     {
//       backgroundColor: images[index].bg,
//       clipPath: "circle(100%)",
//     },
//   )
//   .from(`#text-container-${index}`, {
//     opacity: 0,
//     yPercent: 100,
//     scrollTrigger: `#text-container-${index}`,
//   })
//   .from(
//     `#text-${index} > span`,
//     {
//       rotation: -90,
//       scale: 0,
//       opacity: 0,
//       stagger: 0.1,
//     },
//     "<",
//   )
//   .from(`#bottle-${index}`, { opacity: 0, y: "100vh" })
//   .fromTo(
//     `.fruit-${index}`,
//     { opacity: 0, y: "100vh", scale: 0, rotation: -180 },
//     {
//       opacity: 1,
//       y: "random(-10,10)",
//       scale: "random(0.7,1)",
//       rotation: "random(-180,180)",
//     },
//   );
