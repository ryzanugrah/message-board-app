import type { NextPage } from 'next';
import Layout from '../components/Layout';
import MessageList from './message/list-message';

const Home: NextPage = () => {
  return (
    <Layout title={process.env.appName}>
      <MessageList />
    </Layout>
  );
};

export default Home;
