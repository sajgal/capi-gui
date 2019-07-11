import React from 'react';
import Link from 'next/link';
import { Icon, Button } from 'antd';

const settings = () => {
  return (
    <div>
      <Link href="/home">
        <Button size='large' type='primary' htmlType='submit'>
          <Icon type="double-left" /> Home
        </Button>
      </Link>
      <hr />
      Settings!
    </div>
  );
};

export default settings;