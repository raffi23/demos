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
    imagePath: "/screenshots/demo-01.png",
    responsive: false,
  },
  {
    urlPath: "/demos/demo-02",
    imagePath: "/screenshots/demo-02.png",
    backgroundColor: "#f7f2fb",
    responsive: true,
  },
];
