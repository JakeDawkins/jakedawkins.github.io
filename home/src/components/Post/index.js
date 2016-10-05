import React, { PropTypes } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router";
import "../../styles/_post.scss";

import Author from "../Author";

const Post = (props) =>
  <section className="post" itemScope itemType="http://schema.org/BlogPosting">
      <article role="article" id="scroll" className="post-content" itemProp="articleBody">
        { props.disableBackLink ? null :
          <p>
            <Link to="/posts">&lt;&nbsp;&nbsp;Back to Posts</Link>
          </p>
        }
        <ReactMarkdown source={props.markdown} />
        { props.disableBackLink ? null :
          <p style={{textAlign: "center"}}>
            <Link to="/posts">&lt;&nbsp;&nbsp;Back to Posts</Link>
          </p>
        }
      </article>

      { props.disableAuthor ? null : <Author /> }
  </section>

Post.propTypes = {
  markdown: PropTypes.string.isRequired,
  disableBackLink: PropTypes.bool,
  disableAuthor: PropTypes.bool,
}

export default Post;