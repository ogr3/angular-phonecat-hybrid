import { AngularPhonecatHybridPage } from './app.po';

describe('angular-phonecat-hybrid App', () => {
  let page: AngularPhonecatHybridPage;

  beforeEach(() => {
    page = new AngularPhonecatHybridPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
