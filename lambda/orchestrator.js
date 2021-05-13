"use strict";
module.exports = {
  handler: async function(event, context) {
      console.log(event.items);
      let items = event.items;
    return { items, length: event.items.length };
  }
}