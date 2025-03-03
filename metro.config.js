const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

const ALIASES = {
  "old-module": "new-module",
};

config.resolver.resolveRequest = (context, moduleName, platform) => {
  return context.resolveRequest(
    context,

    ALIASES[moduleName] ?? moduleName,
    platform
  );
};

module.exports = withNativeWind(config, { input: "./global.css" });
