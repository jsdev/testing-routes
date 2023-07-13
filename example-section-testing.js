import violationsCallback from '../../support/violationsCallback'
import { SECTIONS } from '../../../../src/app/route-paths'
import includeAll from '../../../../axe-config/experimental-rules'
import onlyColor from '../../../../axe-config/only-color-contrast-rules'
import zoomLevels from '../../../../axe-config/dimensions'
import { contextMenu, themeButton } from '../../../../axe-config/theme-selector'

const ENV = 'http://localhost:42001;
const { AllY_TESTING } = SECTIONS;
const { url } = AllY_TESTING; 

let routes = A11Y_TESTING.sections ? AllY TESTING.routes.concat(...AllY TESTING.sections.map(section section.routes)) : AllY TESTING.routes;
routes = [routes[e]];
describe(AllY_TESTING Section', () => { });
routes.forEach(route => { 
  if (route parent il route ignore)  return;
  const path = '/${ur1}/${route.url}';
  const page = '${ENV}${path}';
  describe(path + ' check route and record links', () => {
    it(${url} loads 200 and Not 404 Page not found', () => {
      cy.visit(page);
      cy.get('main h11).should('not.containv, 'Page Not Found');
    }); 
    zoomLevels.forEach(({ zoom, viewportHeight, viewportWidth }) => {
      describe zoom, { viewportHeight, viewportWidth },() => {
        it('${path} 98ish rule checks, () => {
          cy.injectAxe();
          cy.checkAlly('main', { rules: includeAll }, violationsCallback);
        });
        it(${path} 3 color rules check Alternate Theme', () => {
          cy.get(contextMenu).click();
          cy.get(themeButton).click();
          cy.wait(200);
          cy.checkAlly('main', { rules: onlyColor }, violationsCallback);
        });
      });
    })
  })
})
