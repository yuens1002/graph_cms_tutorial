import type { NextPage } from 'next';
import { Categories, PostCard, PostWidget } from '../components';
import { getPosts } from '../services';
import { Post } from '../components/PostCard.type';
import { FeaturedPosts } from '../sections/';

interface Posts {
  posts: Array<{ node: Post }>;
}

const Home: NextPage = ({ posts }: Posts) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => {
            return <PostCard key={index} post={post.node} />;
          })}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const posts: Posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
