import { Link } from "react-router-dom";
import { demoRoutes } from "../utils/static";

const Home = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(18.75rem,_1fr))] gap-4">
        {demoRoutes.map((demo, index) => {
          return (
            <Link to={demo.urlPath} key={demo.urlPath}>
              <div className="border border-black rounded-xl overflow-hidden">
                {demo.imagePath && (
                  <img
                    src={demo.imagePath}
                    className="w-full aspect-video object-cover"
                  />
                )}
                <div className="bg-white p-4 border-t border-black">
                  <p>{demo.title ? demo.title : `demo-${index + 1}`}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
