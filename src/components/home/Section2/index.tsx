import React, { FC, useState } from 'react'
import cx from 'classnames'
import Image from 'next/image'
import classes from './section2.module.scss'
import Link from 'next/link'

import img_model from '../../../assets/img/home/section2/iamatvmo.png'
import ic_arrow_right from '../../../assets/icons/arrow_right_white_small.svg'
import ic_arrow_right_black from '../../../assets/icons/arrow_right_black_small.svg'

const Section2: FC = () => {
  const [isHovering, setIsHovering] = useState<boolean>(false)

  return (
    <div className={classes.cover}>
      <div className={cx('ContentPage', classes.section2)}>
        <div className={classes.coverContent}>
          <div className={classes.wrapLeft}>
            <div className={classes.setPadding}>
              <div className={classes.setConcept}>
                <div className={classes.coverImage}>
                  <Image
                    src={img_model}
                    alt='an image, a people blowing out the birthday cake candles'
                    title={
                      'This is my 23 years old birthday, when I working at VMO Holdings company'
                    }
                    className={classes.imgModel}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={classes.wrapRight}>
            <div className={classes.contentRight}>
              <h3 className={classes.title1}>
                VMO Holdings is my first company, this place was a great start
                to my career
              </h3>
              <div className={classes.title2}>
                {
                  "I learned so many things here. communication, behavior, skills, knowledge, technical. I met many good colleagues who taught me. especially a teacher who, even though he did not teach class, guided me wholeheartedly from the first lines of code. Below is my first product, even though it's too naive, it helped me get the first job in my life."
                }
              </div>
              <div className={classes.actionBottom}>
                <Link
                  href={`https://github.com/viondev99/fe-vion-project`}
                  rel='noopener noreferrer'
                  target='_blank'
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
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section2
