
import regexparam from 'regexparam';

import routes from './routes.js';

const routeMatchers = new Map();
for (const [routeName, expressRoute] of routes) {
  // regexparam creates a RegExp that works when matched against just the
  // pathname, but Workbox matches against the full URL (including origin and
  // search params) when doing RegExp matching. To work around this,
  // we'll create our own functions that implement the matchCallback interface:
  // https://developers.google.com/web/tools/workbox/reference-docs/latest/workbox.routing.Route#~matchCallback
  const regExp = regexparam(expressRoute).pattern;
  const matcher = ({url}) => regExp.exec(url.pathname);
  routeMatchers.set(routeName, matcher);
}

export default routeMatchers;
