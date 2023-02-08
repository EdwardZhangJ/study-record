import pluginObject from './01_plugins_object';
import pluginFunction from './02_plugins_function';

export default function usePlugins(app) {
  app.use(pluginObject);
  app.use(pluginFunction);
}
