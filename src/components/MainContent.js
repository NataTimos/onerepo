import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
// import { getImage } from 'gatsby-plugin-image'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import { query } from '../slices/FullWidthImage'

// import skiLiftChairs from '../images/ski-lift-chairs.jpeg'
// import mountainRange from '../images/mountain-range.jpeg'
// import mountainsAndFjords from '../images/mountains-and-fjords.jpg'
// import forrestAerialShot from '../images/forrest-aerial-shot.jpeg'
// import { query } from '../slices/FullWidthImage'

const MainContent = () => {
  // if (!data) return null
  const nnn = useStaticQuery(
    graphql`
    query indexQuery {
      allPrismicArticle(sort: {fields: first_publication_date}) {
        edges {
          node {
            id
            data {
              article_author {
                text
              }
              article_category {
                slug
              }
              article_descr {
                text
              }
              article_title {
                text
              }
              article_image {
                gatsbyImageData
              }
              article_date
            }
          }
        }
      }
    }
  `
  )
console.log(nnn.allPrismicArticle.edges)
const {edges} = nnn.allPrismicArticle;
const art_img = getImage(edges.article_image)
return (
    <main className="container articles-container">
    
      {edges.map(edge => 
      
        <article className="blog-article" key={edge.node.id}>
          <GatsbyImage
            // src={userPhotoUrl}
            image = {edge.node.data.article_image.gatsbyImageData}
            // layout="fixed"
            // width={200}
            // height={200}
            alt=""
          />
          
          <span className="article-category">{edge.node.data.article_category.slug}</span>
          <h3>{edge.node.data.article_title.text}</h3>
          <p className="article-descr">{edge.node.data.article_descr.text}</p>
          <div className="article-date-author">
            <date className="article-date">{edge.node.data.article_date}</date>
            <p className="article-author">{edge.node.data.article_author.text}</p>
            
          </div>
          
          
          
        </article>  
      )}
    </main>)     
        
  // render={data=>(
  //   <h4>
  //     {data.edges.node.data.article_author}
  //   </h4>
  // )} 
    // render = {({ allPrismicArticle: {edges} }) => (
    //   <ul>
    //     {edges.map(({ node: {data.article_author, path} }) =>(
    //       <li key={id}>
    //         <Link to={path}>{id}</Link>
    //       </li>
    //     ) )}
    //   </ul>
    // )}
  // />



  // console.log(query)
  // const {nodes} = doc.allPrismicArticle;
  
  // return (
  //   <main className="container">
  //     <section className="">
  //       <div className="">
  //         <h2>Hello</h2>
          
  //         {/* <p>
  //           <Link to="/">LEARN MORE</Link>
  //         </p> */}
  //       </div>
  //       {/* <div className="highlight-right">
  //         <img src={""} alt="" />
  //       </div> */}
  //     </section>
  //   </main>
  // )
}

export default MainContent

// const MainQuery = graphql`
//   query indexQuery {
//     allPrismicArticle {
//       edges {
//         node {
//           data {
//             article_author {
//               text
//             }
//             article_category {
//               slug
//             }
//             article_descr {
//               text
//             }
//             article_title {
//               text
//             }
//           }
//         }
//       }
//     }
//   }
// `
