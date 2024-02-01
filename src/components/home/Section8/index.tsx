import React, { FC, useState } from 'react'
import cx from 'classnames'
import { listItemLeftSection8, listItemRightSection8 } from '@/store/home_data'
import { ListItemLeftSection8, ListItemRightSection8 } from '@/models/home'
import Image from 'next/image'
import classes from './section8.module.scss'
import Link from 'next/link'

import icPlay from '../../../assets/icons/ic_play_notBg.svg'
import ic_arrow_right from '../../../assets/icons/arrow_right_primary_small.svg'
import ic_arrow_right_white from '../../../assets/icons/arrow_right_white.svg'

const Section8: FC = () => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({})
  const [isHovering, setIsHovering] = useState<{ [key: string]: boolean }>({})

  const handleOpenContent = (id: string) => {
    setOpenItems((prevState) => ({ ...prevState, [id]: !prevState[id] }))
  }

  const handleMouseEnter = (id: string) => {
    setIsHovering((prevState) => ({ ...prevState, [id]: true }))
  }

  const handleMouseLeave = (id: string) => {
    setIsHovering((prevState) => ({ ...prevState, [id]: false }))
  }

  return (
    <div className={classes.cover}>
      <div className={cx('ContentPage', classes.section8)}>
        <div className={classes.coverContent}>
          <div className={cx(classes.itemContent, classes.wrapItemLeft)}>
            <div className={classes.wrapTitle1}>
              <h2 className={classes.title1}>A Few Things About Me</h2>
            </div>
            <div className={classes.wrapContent1}>
              {listItemLeftSection8.map((it: ListItemLeftSection8) => (
                <div
                  key={it.id}
                  className={cx(classes.coverList, {
                    [classes.coverList4]: it.id === 'menu4',
                  })}
                  onClick={() => handleOpenContent(it.id)}
                >
                  <div className={classes.coverItemList1}>
                    {it.title}
                    <Image
                      src={icPlay}
                      alt='icon play'
                      className={cx(classes.iconPlay, {
                        [classes.rotage]: openItems[it.id],
                      })}
                      priority
                    />
                  </div>
                  {openItems[it.id] && (
                    <div
                      className={cx(classes.coverTextContent1, {
                        [classes.open]: openItems[it.id],
                      })}
                    >
                      <p className={classes.textContent1}>{it.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {listItemRightSection8.map((it: ListItemRightSection8) => (
            <div
              key={it.id}
              className={cx(classes.itemContent, classes.wrapItemRight)}
            >
              <div className={classes.wrapImgTop}>
                <Image
                  src={it.img.src}
                  alt={it.img.alt}
                  loading='lazy'
                  className={classes.imgTop}
                />
              </div>
              <div className={classes.titleRight}>
                <h3>{it.title}</h3>
              </div>
              <div className={classes.contentRight}>{it.content}</div>
              <div className={classes.actionBottom}>
                <Link
                  href={it.linkURL.url}
                  rel='noopener noreferrer'
                  className={classes.readMore}
                  onMouseEnter={() => handleMouseEnter(it.id)}
                  onMouseLeave={() => handleMouseLeave(it.id)}
                >
                  <Image
                    src={
                      isHovering[it.id] ? ic_arrow_right_white : ic_arrow_right
                    }
                    alt='icon arrow right'
                    width={15}
                    height={15}
                    className={classes.icArrow}
                  />
                  {it.linkURL.text}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Section8
