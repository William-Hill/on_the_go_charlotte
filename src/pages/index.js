import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div class="columns is-multiline is-mobile is-centered">
              <Sidebar />
              <div class="column is-8 is-offset-1 is-centered">
                {/* start of post */}
                {posts.map(({ node: post }) => (
                  <div
                    className="content"
                    style={{ border: "1px solid #eaecee", padding: "2em 4em" }}
                    key={post.id}
                  >
                    <img src={post.frontmatter.featuredImage} />
                    <p>
                      <Link className="has-text-primary" to={post.fields.slug}>
                        {post.frontmatter.title}
                      </Link>
                      <span> &bull; </span>
                      <small>{post.frontmatter.date}</small>
                    </p>
                    <p>
                      {post.excerpt}
                      <br />
                      <br />
                      <Link className="button is-small" to={post.fields.slug}>
                        Keep Reading →
                      </Link>
                    </p>
                  </div>
                ))}
                {/* end of posts column */}
              </div>
              {/* end of columns div */}
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            featuredImage
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
