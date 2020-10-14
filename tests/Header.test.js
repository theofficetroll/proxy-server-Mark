import React from 'react';
import Header from '../client/components/Header.jsx';
import MenuBar from '../client/components/MenuBar.jsx';

const header = mount(<Header />);

const menuBar = mount(<MenuBar />);

beforeEach(async () => {
  // clear component state and reset window width
  global.innerWidth = 1024;
  await header.unmount();
  await header.mount();
});

describe('Component rendering (default 1024px width)', () => {
  it('should render Header component and sub-components', () => {
    expect(header).toExist();
    expect(header.find('.brandHeader')).toExist();
    expect(header.find('.mainHeader')).toExist();
    expect(header.find('.banner')).toExist();
    expect(header.find('.menuBar')).toExist();
  });
});

describe('Navigation menus', () => {
  it('should hide menus by default', () => {
    expect(menuBar.find('.focused')).toEqual({});
  });

  it('should display menu based on state', () => {
    menuBar.setState({
      activeMenu: '3',
    });
    menuBar.update();
    expect(menuBar.find('.focused')).toMatchSelector('[data-menu="3"]');
  });
});
