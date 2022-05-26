import "./style.css";
import { useEffect } from "react";
const Timeline = () => {

  useEffect(() => {
    var items = document.querySelectorAll("li");

    function isItemInView(item) {
      var rect = item.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isItemInView(items[i])) {
          items[i].classList.add("show");
        }
      }
    }

    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  }, []);

  return (
    <>
      <div>
        <ul>
          <li>
            <div>
              <time>2021 January</time>
              <p>
              <img src="https://content.fun-japan.jp/renewal-prod/cms/articles/content/1jpg_2019-12-02-03-32-04.jpg" alt="" />
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
          </li>
          <li>
            <div>
              <time>2021 May</time>
              <p>
                <img src="https://img.freepik.com/free-vector/samurai-girl-mascot-illustration-design_508818-50.jpg?w=2000" alt="" />
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
          </li>
          <li>
            <div>
              <time>2021 September</time>
              <p>
              <img src="https://content.fun-japan.jp/renewal-prod/cms/articles/content/1jpg_2019-12-02-03-32-04.jpg" alt="" />

                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
          </li>
          <li>
            <div>
              <time>1940</time>
              <p>
              <img src="https://img.freepik.com/free-vector/samurai-girl-mascot-illustration-design_508818-50.jpg?w=2000" alt="" />

                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
          </li>
          <li>
            <div>
              <time>1950</time>
              <p>
              <img src="https://content.fun-japan.jp/renewal-prod/cms/articles/content/1jpg_2019-12-02-03-32-04.jpg" alt="" />

                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
          </li>
          <li>
            <div>
              <time>1960</time>
              <p>
              <img src="https://img.freepik.com/free-vector/samurai-girl-mascot-illustration-design_508818-50.jpg?w=2000" alt="" />

                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
          </li>
          <li>
            <div>
              <time>1970</time>
              <p>
              <img src="https://content.fun-japan.jp/renewal-prod/cms/articles/content/1jpg_2019-12-02-03-32-04.jpg" alt="" />

                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
          </li>
          <li>
            <div>
              <time>1980</time>
              <p>
              <img src="https://img.freepik.com/free-vector/samurai-girl-mascot-illustration-design_508818-50.jpg?w=2000" alt="" />

                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
          </li>
          <li>
            <div>
              <time>1990</time>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Timeline;
