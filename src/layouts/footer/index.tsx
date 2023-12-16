import React, { FC } from 'react'
import classes from './footer.module.scss'
import { listSiteBar, listSocialFooter } from '@/constants/layouts'
import { ListIconSocial, ListSiteBar } from '@/models/header'
import Link from 'next/link'
import { useRouter } from 'next/router'
import cx from 'classnames'
import Image from 'next/image'

const Footer: FC = () => {
  const { pathname } = useRouter()

  return (
    <div className={'ContainerFooter'}>
      <div className={classes.footer}>
        <div className={classes.wrapContent}>
          <div className={classes.leftContent}>
            <p>Copyright © 2023 Vion Nguyen</p>
          </div>
          <div className={classes.centerContent}>
            <div className={classes.listSocial}>
              {listSocialFooter.map((it: ListIconSocial) => (
                <Link
                  href={it.url}
                  key={it.id}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={cx(
                    classes.linkSocial,
                    it.id === 'linkedin' ? classes.linkLinkedin : ''
                  )}
                >
                  <Image
                    src={it.src}
                    alt={it.alt}
                    className={cx(classes.iconSocial, {
                      [classes.icFB]: it.id === 'fb',
                      [classes.icIns]: it.id === 'ins',
                      [classes.icLinkedin]: it.id === 'linkedin',
                    })}
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className={classes.rightContent}>
            <div className={classes.listSite}>
              {listSiteBar.map((it: ListSiteBar) => (
                <Link
                  href={it.url}
                  key={it.id}
                  className={cx(
                    classes.linkSitebar,
                    pathname === it.url ? classes.selected : '',
                    it.id === 'contact' ? classes.classContact : ''
                  )}
                >
                  {it.content}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
