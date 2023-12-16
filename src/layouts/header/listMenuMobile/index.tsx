import React, { FC } from 'react'
import { ListIconSocial, ListSiteBar } from '@/models/header'
import classes from './menuMobile.module.scss'
import Link from 'next/link'
import cx from 'classnames'
import Image from 'next/image'
import { useRouter } from 'next/router'

interface Props {
  listSiteBar: ListSiteBar[]
  listSocial: ListIconSocial[]
}

const ListMenuMobile: FC<Props> = ({ listSiteBar, listSocial }) => {
  const { pathname } = useRouter()

  return (
    <div className={classes.menuMobile}>
      {listSiteBar.map((it: ListSiteBar) => (
        <div
          key={it.id}
          className={cx(classes.listSiteBar, {
            [classes.itemFirst]: it.id === 'home',
          })}
        >
          <Link
            href={it.url}
            className={cx(
              classes.itemLink,
              pathname === it.url ? classes.selected : ''
            )}
          >
            {it.content}
          </Link>
        </div>
      ))}
      <div className={classes.listIconContact}>
        {listSocial.map((it: ListIconSocial) => (
          <Link
            href={it.url}
            key={it.id}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src={it.src}
              alt={it.alt}
              className={cx({
                [classes.icFB]: it.id === 'fb',
                [classes.icIns]: it.id === 'ins',
                [classes.icLinkedin]: it.id === 'linkedin',
              })}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ListMenuMobile
