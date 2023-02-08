import registerFormatTime from './format-time/index';
import registerFocus from './focus/index';
export default function registerDirectives(app) {
  registerFocus(app);
  registerFormatTime(app);
}
