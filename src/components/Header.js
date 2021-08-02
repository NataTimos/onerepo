// Header.js file 

import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { RichText } from 'prismic-reactjs'

export const Header = ({ isHomepage }) => {
  const queryData = useStaticQuery(graphql`
    {
      prismicNavigation {
        data {
          top_navigation {
            link {
              url
            }
            link_label {
              raw
            }
          }
        }
      }
    }
  `)

  const navigation = queryData.prismicNavigation
  const topNav = navigation.data.top_navigation

  const homepageClass = isHomepage ? 'homepage-header' : ''

  return (
    <header className={`site-header ${homepageClass}`}>
      <Link to="/">
        <div className="logo">Blog template</div>
      </Link>
      <nav>
        <ul className="ul-page-link">
          {topNav.map((navItem, index) => {
            return (
              <li className="page-link" key={`link-${index}`}>
                <Link to={navItem.link.url}>
                  {RichText.asText(navItem.link_label.raw)}
                </Link>
              </li>
            )
          })}
          </ul>
          <ul className="categoru-filter">
            <li className="categoru-filter-item">Nature</li>
            <li className="categoru-filter-item">People</li>
            <li className="categoru-filter-item">Trips</li>
            <li className="categoru-filter-item">Animals</li>
            <li className="categoru-filter-item">Fashion</li>
            <li className="categoru-filter-item">Tech</li>
            <li className="categoru-filter-item">...</li>
          </ul>
      </nav>
    </header>
  )
}