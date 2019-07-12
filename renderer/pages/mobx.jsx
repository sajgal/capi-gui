import React, { Component } from 'react';
import Head from 'next/head';
import { observer } from 'mobx-react';
import { Button } from 'antd';

class MobXExample extends Component {
  static async getInitialProps({ mobxStore, query }) {
    // await mobxStore.postStore.fetch(query.id);
    return {
      employeeStore: mobxStore.employeeStore,
    };
  }

  render() {
    const { employeeStore } = this.props;

    if (employeeStore.employees === undefined || employeeStore.employees.length === 0) {
      return <div>Empty</div>
    }

    const list = employeeStore.employees.map((employee, index) => {
      return <div key={`emp-${index}`}>
        <b>{employee.name}</b> - desk <b>#{employee.deskId}</b>
      </div>
    });

    return <div>
      <Head>
        <title>CAPI Desktop - MobX</title>
      </Head>

      {list}

      <Button type="primary" shape="circle" icon="plus" onClick={employeeStore.add} />
    </div>
  }
}

export default observer(MobXExample);