import React from 'react';
import Footer from '../client/components/Footer.jsx';

const footer = mount(<Footer />);

beforeEach(async () => {
  // clear component state and reset window width
  global.innerWidth = 1024;
  await footer.unmount();
  await footer.mount();
});

describe('Component rendering (default 1024px width)', () => {
  it('should render Footer component and sub-components', () => {
    expect(footer).toExist();
    expect(footer.find('.linksMenu')).toExist();
    expect(footer.find('.socialMenu')).toExist();
    expect(footer.find('.countryPin')).toExist();
    expect(footer.find('.subFooterMenu')).toExist();
  });
});

describe('Footer links', () => {
  it('should render links from stored data', () => {
    const link = footer.find('.linksMenu').childAt(1);
    console.log(link.html());
    expect(link).toIncludeText('GET HELP');
  });
});
