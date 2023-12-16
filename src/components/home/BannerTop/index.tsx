import React, { FC, useState } from 'react'
import classes from './bannerTop.module.scss'
import cx from 'classnames'
import Image from 'next/image'

import img_banner from '../../../assets/img/home/banner/banner.png'
import ic_arrow_right from '../../../assets/icons/arrow_right_white_small.svg'
import ic_arrow_right_black from '../../../assets/icons/arrow_right_black_small.svg'
import ic_play from '../../../assets/icons/ic_play.svg'

const BannerTop: FC = () => {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div className={classes.cover}>
      <Image
        src={img_banner}
        alt='image banner'
        className={classes.banner}
        priority
      />
      <div className={classes.opacity}></div>
      <div className={cx('ContentPage', classes.coverContent)}>
        <div className={classes.contentBanner}>
          <div className={classes.contentItem}>
            <h2 className={classes.title1}>Welcome to visit my blog</h2>
            <h1 className={classes.title2}>I’m a Developer and I have 2 main channel for technical:</h1>
            <div className={classes.actionBottom}>
              <div className={classes.wrapReadMore}>
                <div
                  onClick={() => window.open('https://github.com/viondev99', '_blank')}
                  rel='noopener noreferrer'
                  className={classes.readMore}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <Image
                    src={isHovering ? ic_arrow_right_black : ic_arrow_right}
                    alt='icon arrow right'
                    width={15}
                    height={15}
                    className={classes.icArrow}
                  />
                  <span>My Github Channel</span>
                </div>
              </div>
              <div className={classes.wrapWatchVideo}>
                <div
                  onClick={() => window.open('https://youtube.com/', '_blank')}
                  rel='noopener noreferrer'
                  className={classes.watchVideo}
                >
                  <Image
                    src={ic_play}
                    alt='icon arrow right'
                    width={15}
                    height={15}
                    className={classes.icPlay}
                  />
                  <span>My Youtube Channel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerTop
