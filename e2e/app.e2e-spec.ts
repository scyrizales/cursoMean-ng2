import { HolaAngularCliPage } from './app.po';

describe('hola-angular-cli App', () => {
  let page: HolaAngularCliPage;

  beforeEach(() => {
    page = new HolaAngularCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
