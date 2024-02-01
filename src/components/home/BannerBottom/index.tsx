import React, { FC, useState } from "react";
import cx from "classnames";
import classes from "./bannerBottom.module.scss";
import Image from "next/image";
import Link from "next/link";

import Banner from "../../../assets/img/home/banner/banner.png";
import ic_arrow_right from "../../../assets/icons/arrow_right_white_small.svg";
import ic_arrow_right_black from "../../../assets/icons/arrow_right_black_small.svg";

const BannerBottom: FC = () => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  return (
    <div className={classes.cover}>
      <Image
        src={Banner}
        alt="image banner"
        className={classes.banner}
        priority
      />
      <div className={classes.opacity}></div>
      <div className={cx("ContentPage", classes.coverContent)}>
        <div className={classes.contentBanner}>
          <div className={classes.text1}>
            <h5>Contact Me</h5>
          </div>
          <div className={classes.wrapLine}>
            <span className={classes.line} />
          </div>
          <div className={classes.text2}>
            <h2>Everybody can contact me for work</h2>
          </div>
          <div className={classes.text4}>
            <p>
              I’m a Web Application Developer. So, I can design, develop web
              applications according to your requirements and desires
            </p>
          </div>
          <div className={classes.actionBottom}>
            <Link
              href={"/contact"}
              rel="noopener noreferrer"
              className={classes.readMore}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {"Let's Get Started"}
              <Image
                src={isHovering ? ic_arrow_right_black : ic_arrow_right}
                alt="icon arrow right"
                width={15}
                height={15}
                className={classes.icArrow}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
