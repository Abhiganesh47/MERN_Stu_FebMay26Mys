// JSON Settings Merge
// Assignment 3
function mergeSettings(savedSettingsJSON, defaultSettings) {
    const savedSettings = JSON.parse(savedSettingsJSON);
    const merged = { ...defaultSettings };
    for (let key in savedSettings) {
        merged[key] = savedSettings[key];
    }
    const mergedJSON = JSON.stringify(merged);
    return {
        mergedObject: merged,
        mergedJSON: mergedJSON
    };
}
const defaultSettings = {
    theme: "light",
    volume: 80
};
const savedSettingsJSON = '{"theme":"dark","volume":80}';
const result = mergeSettings(savedSettingsJSON, defaultSettings);
console.log(result.mergedObject);
console.log(result.mergedJSON);