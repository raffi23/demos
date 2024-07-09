type DemoRoute = {
  title?: string;
  urlPath: string;
  imagePath?: string;
  backgroundColor?: string;
  responsive: boolean;
};

export const demoRoutes: DemoRoute[] = [
  {
    urlPath: "/demos/demo-01",
    imagePath: "/screenshots/demo-01.webp",
    responsive: false,
  },
  {
    urlPath: "/demos/demo-02",
    imagePath: "/screenshots/demo-02.webp",
    backgroundColor: "#f7f2fb",
    responsive: true,
  },
  {
    urlPath: "/demos/demo-03",
    imagePath: "/screenshots/demo-03.webp",
    responsive: true,
  },
  {
    urlPath: "/demos/demo-04",
    imagePath: "/screenshots/demo-04.webp",
    responsive: false,
  },
  {
    urlPath: "/demos/demo-05",
    imagePath: "/screenshots/demo-05.webp",
    responsive: false,
  },
  {
    urlPath: "/demos/demo-06",
    imagePath: "/screenshots/demo-06.webp",
    responsive: false,
  },
  {
    urlPath: "/demos/demo-07",
    backgroundColor: "#f8f8f8",
    imagePath: "/screenshots/demo-07.webp",
    responsive: false,
  },
];
