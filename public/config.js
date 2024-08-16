module.exports = function configJSON(req) {
  return {
    "name": "My Custom Activity",
    "description": "A description of the custom activity",
    "icon": "path/to/icon.png",
    "edit": {
        "url": "https://your-edit-url.com"
    },
    "execute": {
        "url": "https://your-execute-url.com"
    },
    "schema": {
        "arguments": {
            "execute": {
                "inArguments": [],
                "outArguments": []
            }
        }
    }
};
