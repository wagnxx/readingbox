import React from 'react';
import {shallow,render,mount} from 'enzyme';
import Error from '../';

describe('测试Error组件',()=>{
    it("测试快照", () => {
      const wrapper = shallow(<Error />);
      expect(wrapper).toMatchSnapshot();
    });
})
