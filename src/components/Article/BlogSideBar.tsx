"use client";

import React from "react";
import Link from "next/link";

const BlogSideBar: React.FC = () => {
  return (
    <>
      <div className="widget-area" id="secondary">
        {/* Search */}
        <div className="widget widget_search">
          <form className="search-form">
            <label>
              <input
                type="search"
                className="search-field"
                placeholder="Search..."
              />
            </label>
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>

        {/* Popular Posts */}
        <div className="widget widget_posts_thumb">
          <h3 className="widget-title">Popular Posts</h3>

          <article className="item">
            <Link href="/blog/details" className="thumb">
              <span
                className="fullimage cover"
                role="img"
                style={{
                  backgroundImage: `url(/images/blog-image/blog-image7.jpg)`,
                }}
              ></span>
            </Link>

            <div className="info">
              <time>June 10, 2023</time>
              <h4 className="title usmall">
                <Link href="/blog/details">
                  Making Peace With The Feast Or Famine Of Freelancing
                </Link>
              </h4>
            </div>

            <div className="clear"></div>
          </article>

          <article className="item">
            <Link href="/blog/details" className="thumb">
              <span
                className="fullimage cover"
                role="img"
                style={{
                  backgroundImage: `url(/images/blog-image/blog-image8.jpg)`,
                }}
              ></span>
            </Link>

            <div className="info">
              <time>June 21, 2023</time>
              <h4 className="title usmall">
                <Link href="/blog/details">
                  I Used The Web For A Day On A 50 MB Budget
                </Link>
              </h4>
            </div>

            <div className="clear"></div>
          </article>

          <article className="item">
            <Link href="/blog/details" className="thumb">
              <span
                className="fullimage cover"
                role="img"
                style={{
                  backgroundImage: `url(/images/blog-image/blog-image9.jpg)`,
                }}
              ></span>
            </Link>

            <div className="info">
              <time>June 30, 2023</time>
              <h4 className="title usmall">
                <Link href="/blog/details">
                  How To Create A Responsive Popup Gallery?
                </Link>
              </h4>
            </div>

            <div className="clear"></div>
          </article>
        </div>

        {/* Categories */}
        <div className="widget widget_categories">
          <h3 className="widget-title">Categories</h3>

          <ul>
            <li>
              <Link href="/blog">Business</Link>
            </li>
            <li>
              <Link href="/blog">Privacy</Link>
            </li>
            <li>
              <Link href="/blog">Technology</Link>
            </li>
            <li>
              <Link href="/blog">Tips</Link>
            </li>
            <li>
              <Link href="/blog">Uncategorized</Link>
            </li>
          </ul>
        </div>

        {/* Recent Comments */}
        <div className="widget widget_recent_comments">
          <h3 className="widget-title">Recent Comments</h3>

          <ul>
            <li>
              <span className="comment-author-link">
                <Link href="#">A WordPress Commenter</Link>
              </span>
              <span className="plr-5">on</span>
              <Link href="#">Hello world!</Link>
            </li>
            <li>
              <span className="comment-author-link">
                <Link href="#">Taiker</Link>
              </span>
              <span className="plr-5">on</span>
              <Link href="#">Hello world!</Link>
            </li>
            <li>
              <span className="comment-author-link">
                <Link href="#">Wordpress</Link>
              </span>
              <span className="plr-5">on</span>
              <Link href="#">Hello world!</Link>
            </li>
            <li>
              <span className="comment-author-link">
                <Link href="#">A WordPress Commenter</Link>
              </span>
              <span className="plr-5">on</span>
              <Link href="#">Hello world!</Link>
            </li>
            <li>
              <span className="comment-author-link">
                <Link href="#">Taiker</Link>
              </span>
              <span className="plr-5">on</span>
              <Link href="#">Hello world!</Link>
            </li>
          </ul>
        </div>

        {/* Recent Posts */}
        <div className="widget widget_recent_entries">
          <h3 className="widget-title">Recent Posts</h3>

          <ul>
            <li>
              <Link href="/blog/details">
                How to Become a Successful Entry Level UX Designer
              </Link>
            </li>
            <li>
              <Link href="/blog/details">
                How to start your business as an entrepreneur
              </Link>
            </li>
            <li>
              <Link href="/blog/details">
                How to be a successful entrepreneur
              </Link>
            </li>
            <li>
              <Link href="/blog/details">
                10 Building Mobile Apps With Ionic And React
              </Link>
            </li>
            <li>
              <Link href="/blog/details">
                Protect your workplace from cyber attacks
              </Link>
            </li>
          </ul>
        </div>

        {/* Tags */}
        <div className="widget widget_tag_cloud">
          <h3 className="widget-title">Tags</h3>

          <div className="tagcloud">
            <Link href="/blog">
              IT <span className="tag-link-count"> (3)</span>
            </Link>
            <Link href="/blog">
              Taiker <span className="tag-link-count"> (3)</span>
            </Link>
            <Link href="/blog#">
              Games <span className="tag-link-count"> (2)</span>
            </Link>
            <Link href="/blog">
              Fashion <span className="tag-link-count"> (2)</span>
            </Link>
            <Link href="/blog">
              Travel <span className="tag-link-count"> (1)</span>
            </Link>
            <Link href="/blog">
              Smart <span className="tag-link-count"> (1)</span>
            </Link>
            <Link href="/blog">
              Marketing <span className="tag-link-count"> (1)</span>
            </Link>
            <Link href="/blog">
              Tips <span className="tag-link-count"> (2)</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSideBar;
