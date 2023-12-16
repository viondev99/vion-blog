import React, { FC } from 'react'
import cx from 'classnames'
import classes from './section5.module.scss'
import { listItemSection5 } from '@/constants/home'
import { ListItemSection5 } from '@/models/home'
import Image from 'next/image'

const Section5: FC = () => {
  return (
    <div className={classes.cover}>
      <div className={cx('ContentPage', classes.section5)}>
        <div className={classes.coverContent}>
          {listItemSection5.map((it: ListItemSection5) => (
            <div key={it.id} className={classes.wrapItem}>
              <figure className={classes.figure}>
                <Image
                  src={it.img.src}
                  alt={it.img.alt}
                  className={classes.imgNumber}
                />
              </figure>
              <div className={classes.itemRight}>
                <h3 className={classes.title}>{it.title}</h3>
                <p className={classes.content}>{it.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Section5
