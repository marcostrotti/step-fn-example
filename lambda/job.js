"use strict";
module.exports = {
  handler: async function(event, context) {
    const item = event.items.pop();
    return { items: event.items, length: event.items.length };
  }
}