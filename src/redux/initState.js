
export default {
  commonState: {
    loading: {
      isShow: false,
      message: 'Loading...',
      size: 'default', // small default large
      spinning: true,
    }
  },
  newState: {
    list: [
      {id: 1, title: 'title test one'},
      {id: 2, title: 'title test two'},
      {id: 3, title: 'title test three'},
    ]
  },
  // userState: {
  //   name: '张三',
  //   age: 100,
  //   email: 'tongchuanxing@163.com'
  // },
  // menuState: {
  //   menu: [
  //     {key:1, name: 'Index',action: '/'},
  //     {key:2, name: 'News', action: '/news'},
  //     {key:3, name: 'User', action: '/user'},
  //   ],
  //   subMenu: [
  //     {key: 'sub1', type: 'user', title:'subnav 1', list: [
  //       {key: 1, name: 'IconPage', page: 'IconPage'},
  //       {key: 2, name: 'ButtonPage', page: 'ButtonPage'},
  //       {key: 3, name: 'option3'},
  //       {key: 4, name: 'option4'},
  //     ]},
  //     {key: 'sub2', type: 'laptop', title:'subnav 2', list: [
  //       {key: 4, name: 'option5'},
  //       {key: 5, name: 'option6'},
  //       {key: 6, name: 'option7'},
  //       {key: 7, name: 'option8'},
  //     ]},
  //     {key: 'sub3', type: 'notification', title:'subnav 3', list: [
  //       {key: 4, name: 'option5'},
  //       {key: 5, name: 'option6'},
  //       {key: 6, name: 'option7'},
  //       {key: 7, name: 'option8'},
  //     ]}
  //   ]
  // }
};
