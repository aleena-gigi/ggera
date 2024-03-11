import styled from "styled-components";
import BlogCard, { BlogCardProps } from "./BlogCard";
import styles from './blog.module.css'

interface BlogListProps {
    blogs: BlogCardProps[];
    showButton?: boolean;
}

const Wrapper = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: center;
`
const BlogList = ({blogs, showButton = true}: BlogListProps) => {
  return (
    <>
      <Wrapper>
        {blogs.map((blog, index) => {
          return (
            <BlogCard
            key={index}
            imageSrc={blog.imageSrc}
            alt={blog.alt}
            buttonHandleClick={blog.buttonHandleClick}
            buttonText={blog.buttonText}
            description={blog.description}
            title={blog.title}
            />
            );
          })}
      </Wrapper>
      {showButton && <button className={styles.load}>Load More</button>}
    </>
  );
}

export default BlogList;