import { Icon } from 'antd';

const trueIcon = <Icon type="check-circle" theme="twoTone" twoToneColor="#9AE19D" />;
const falseIcon = <Icon type="close-circle" theme="twoTone" twoToneColor="#EFECEA" />;

export const SHOW_TABLE_SCHEMA = [
  {
    title: 'ID',
    dataIndex: 'id',
    render: id => `${id.substr(0, 8)}...`
  },
  {
    title: 'Title',
    dataIndex: 'title',
  },
  {
    title: 'Draft',
    dataIndex: 'draft',
    render: bool => bool ? trueIcon : falseIcon,
  },
  {
    title: 'On Air',
    dataIndex: 'on_air',
    render: bool => bool ? trueIcon : falseIcon,
  },
  {
    title: 'On Demand',
    dataIndex: 'on_demand',
    render: bool => bool ? trueIcon : falseIcon,
  },
];