/* eslint-disable no-unused-vars */
import React from 'react';
import { NavigationBar,Loading,ParagraphBlock,Wrapper } from "@components";
import { getBlogs } from "../../../server/index";

const Home = () => {
  let { loading, error, data} =  getBlogs();
  if (loading) return (<Loading/>);
  if (error) return <p>Error :(</p>;
  console.log();
  return (
    <>
      <NavigationBar/>
      <Wrapper>
        {data.articles.map(article=>(
          <ParagraphBlock>
            <div className="card paragraph" width="full" dangerouslySetInnerHTML={{ __html: article.content }} />
          </ParagraphBlock>
        ))}
        
      </Wrapper>
    </>
  );
};

export default Home;
