import * as React from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'

import  Layout  from '../components/Layout'
import  Seo  from '../components/Seo'
import { HomepageBanner } from '../components/HomepageBanner'
import {SliceZone}  from '../components/SliceZone'
import MainContent from '../components/MainContent'

const HomeTemplate = ({ data }) => {
  if (!data) return null
  const doc = data.prismicHomepage.data

  return (
    <Layout isHomepage>
      <Seo title="Home" />
      <HomepageBanner
        title={RichText.asText(doc.banner_title.raw)}
        description={RichText.asText(doc.banner_description.raw)}
        // linkUrl={doc.banner_link.url}
        // linkLabel={RichText.asText(doc.banner_link_label.raw)}
        backgroundUrl={doc.banner_background.url}
        userPhoto={doc.banner_user_photo}
      />
      <MainContent />
      {/* <SliceZone sliceZone={doc.body} /> */}
    </Layout>
  )
}

export const IndexQuery = graphql`
query MyQuery {
    prismicHomepage {
      data {
        banner_title {
          raw
        }
        banner_description {
          raw
        }
        
        banner_background {
          url
        }
        banner_user_photo {
          gatsbyImageData
        }
        body {
          ...on PrismicSliceType {
            slice_type
          }
          ...HomepageDataBodyText
          ...HomepageDataBodyQuote
          ...HomepageDataBodyFullWidthImage
          ...HomepageDataBodyImageGallery
          ...HomepageDataBodyImageHighlight
        }
      }
    }
  }
`

export default HomeTemplate
