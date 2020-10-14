import React from 'react';
import Footer from '../client/components/Footer.jsx';

const app = mount(<Header />);

const menuBar = mount(<MenuBar />);

beforeEach(async () => {
  // clear component state and reset window width
  global.innerWidth = 1024;
  await app.unmount();
  await app.mount();
});

describe('Component rendering (default 1024px width)', () => {
  it('should render Header component and sub-components', () => {
    expect(app).toExist();
    expect(app.find('.brandHeader')).toExist();
    expect(app.find('.mainHeader')).toExist();
    expect(app.find('.banner')).toExist();
    expect(app.find('.menuBar')).toExist();
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
