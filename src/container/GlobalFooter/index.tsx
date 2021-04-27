import { DefaultFooter } from '@ant-design/pro-layout';
import { GithubOutlined } from '@ant-design/icons';

export default function GlobalFooter() {
  return (
    <DefaultFooter
      copyright={`${new Date().getFullYear()} zkc 出品`}
      links={[
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/kong303917/react-vite-demo',
          blankTarget: true,
        },
      ]}
    />
  );
}
