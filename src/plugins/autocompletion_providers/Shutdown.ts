import {PluginManager} from "../../PluginManager";
import {manPageOptions} from "../../utils/ManPages";

PluginManager.registerAutocompletionProvider("shutdown", manPageOptions("shutdown"));
